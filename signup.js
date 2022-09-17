const mongoose =require('mongoose')
const Schema=mongoose.Schema

const pSchema=new Schema({
    
    password:String,
    username:String,
   
}, { timestamps: true });
const  Login=mongoose.model('Login',pSchema)
module.exports= Login;