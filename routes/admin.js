const express = require("express");
const app = express.Router();
const path = require("path");

app.get("/user/start",(req,res)=>{
    res.render('start');
});