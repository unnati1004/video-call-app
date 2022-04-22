const express  = require("express");
const connect  = require('./config/db');
const app = express();





app.listen(8080, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
})
