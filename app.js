const express = require("express")
const fs =  require("fs")
const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.listen(3000, ()=>{
    console.log("App is Running at Port 3000")
})