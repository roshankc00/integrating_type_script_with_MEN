import  { Schema } from "mongoose";

const noteSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})


