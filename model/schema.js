const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const userSchema= new Schema({
    name:{
        type:String,
        
    },
   
    location:{
        type:String,
        
    }

},{timestamps:true})



const User=mongoose.model("users",userSchema);

module.exports=User;
