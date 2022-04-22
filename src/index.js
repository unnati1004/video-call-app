const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8000;

app.listen(port, async () => {
    try {
        await connect();
        console.log(`Listing on port ${port}`);
    } catch (error) {
        console.log(error);
    }
});
