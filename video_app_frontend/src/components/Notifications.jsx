import React, { useContext } from 'react'

import { SocketContext } from "../SocketContext";


const Notifications = () => {

 const {answercall,call,callAccepted }=useContext(SocketContext)


  return (
    <div>
      <>
        {call.isRecievedCall && !callAccepted && (
          <div styles={{ display: "flex", justifyContent: "center" }}>
            <h1> {call.name} is calling </h1>

            
            <button onClick={answercall}>Answer</button>
          </div>
        )}
      </>
    </div>
  );
}

export default Notifications