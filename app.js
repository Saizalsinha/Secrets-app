const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/secretDb",
{useUnifiedTopology:true})
.then(()=>{
  console.log("connected!");
})
.catch((err)=>{
  console.log("Mongo Connection error");
  console.log(err);
})

app.get("/",function(req,res){
  res.render("home");
});

app.get("/login",function(req,res){
  res.render("login");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.listen("3000",function(){
  console.log("App running!");
});
