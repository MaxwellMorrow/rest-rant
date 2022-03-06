// environment  required
require("dotenv").config();

const express = require("express");
const app = express();

app.use('/places', require("./controllers/places"))

app.get("/", (req,res)=>{
    res.send("hello world")
});

app.get("*", (req,res)=>{
    res.status(404).send(`<h1>404 Page not Found</h1>`)
});

app.listen(process.env.PORT,()=>{
    console.log("listening on port 3002")
});
