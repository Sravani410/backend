// import dotenv from 'dotenv'
const express = require("express");
const mongoose=require("mongoose")
require('dotenv').config();

const URI=process.env.MONGO_DB
const Connect=()=>{
     return mongoose.connect("mongodb+srv://backend:Backend123@backend.51eocjm.mongodb.net/test").then(()=>console.log("Mongodb is connected")).error((err)=>console.log(err.message))
}
module.exports=Connect

