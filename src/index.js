const express  = require("express");
const connect  = require('./config/db');
console.log(connect);
const app = express();





app.listen(8080, async()=>{
    try {
        await connect();
        console.log("listening");
    } catch (error) {
        console.log(error);
    }
})
