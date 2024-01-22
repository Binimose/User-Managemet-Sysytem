const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({port:"config.env"})
const port = process.env.port||7000;
app.get("/",(req,res)=>{
  app.send("hello")
})
app.listen(port,()=>{
  console.log("server is running on port 3000")
})