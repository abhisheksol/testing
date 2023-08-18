const express = require('express');
const app=express()
const port=5000

// app.use(express.static(__dirname +"/view"))
app.use(express.static(__dirname + '/views/frontend'));

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.send("you website is running now ")
    // res.render("frontend/index")
})
app.listen(process.env.PORT || port, ()=> console.log("listening to port 5000"))