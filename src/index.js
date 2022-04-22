const express = require("express");
const connect = require("./config/db");
const app = express();

const server=require("http").createServer(app)

require("dotenv").config();

const cors=require("cors")

const io=require("socket.io")(server,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.use(cors())

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{

    res.send("server running")

})

io.on('connection',(socket)=>{

    socket.emit("me",socket.id )


    socket.on("disconnect",()=>{

        socket.broadcast.emit("call ended")

    })

    socket.on("calluser",({userTocall,signalData,from,name})=>{

        io.to(userTocall).emit("calluser",{signal:signalData,from,name})

    })

    socket.on("answercall",(data)=>{

        io.to(data.to).emit("callaccepted",data.signal)
        

    })


});




server.listen(port, async () => {
    try {
        await connect();
        console.log(`Listing on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
