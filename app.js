const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose")

const User = require("./models/users.js");

const app = express();

app.get("/", (req, res) => {
    res.send("Ok");
})

app.get("/api/v1/id", (req, res) => {
    
})

app.listen(3000, () => {
    console.log("server started at 3000 port");
})