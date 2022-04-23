import React, { createContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client'
import Peer from "simple-peer"

const SocketContext = createContext()

const socket = io("https://videochapp1.herokuapp.com")



const ContextProvider = ({ children }) => {

    const [stream, setstream] = useState({})

    const [me, setMe] = useState("")



    const [call, setcall] = useState({})

    const [callAccepted, setcallAccepted] = useState(false)

    const [callEnded, setcallEnded] = useState(false)

    const [name, setname] = useState("")


    const myVideo = useRef()
    console.log("myVideo", myVideo);

    const userVideo = useRef()
    console.log("userVideo", userVideo);

    const connectionRef = useRef()




    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentstream) => {

            setstream(currentstream)

            myVideo.current.srcObject = currentstream

        })

        socket.on('me', (id) => {
            setMe(id)
        })

        socket.on("calluser", ({ from, name: callerName, signal }) => {


            setcall({ isRecievedCall: true, from, name: callerName, signal })

        })

    }, [])

    const answercall = () => {

        console.log("answer call")
        setcallAccepted(true)

        const peer = new Peer({ initiator: false, trickel: false, stream })

        peer.on("signal", (data) => {

            socket.emit("answercall", { signal: data, to: call.from })

        })



        peer.on("stream", (currentstream) => {
            userVideo.current.srcObject = currentstream
            
        })

        peer.signal(call.signal)


        connectionRef.current = peer;
        

    };

    
    const calluser = (id) => {
        
        const peer = new Peer({ initiator: true, trickel: false, stream });
        
        peer.on("signal", (data) => {
            socket.emit("calluser", { userTocall: id, signalData: data, from: me, name });
        })
        
        peer.on("stream", (currentstream) => {

            userVideo.current.srcObject = currentstream
        })

        socket.on("callaccepted", (signal) => {

            setcallAccepted(true)


            peer.signal(signal)
        })

        connectionRef.current = peer

    }


    const leavecall = () => {
        setcallEnded(true)

        connectionRef.current.destroy();

        window.location.reload();

    }

    return (

        <SocketContext.Provider value={{
            call,
            callAccepted,
            callEnded,
            myVideo,
            userVideo,
            name,
            setname,
            stream,
            me,
            calluser,
            leavecall,
            answercall


        }}>
            {children}


        </SocketContext.Provider>
    )

}

export { ContextProvider, SocketContext }