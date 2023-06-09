import mongoose from "mongoose";
import {InferSchemaType} from 'mongoose'
import pkg from 'validator'
const {isEmail,isLength}=pkg
import bcrypt from 'bcryptjs'
import { NextFunction } from 'express';
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true ,"username field is required"],
        minLength:5,
    },
    email:{
        type:String,
        required:[true,"email field is required"],
        validate:[isEmail,"enter the valid email"],
        select:false
    },
    password:{
        type:String,
        required:[true,"password field is required"],
        minLength:5,
        select:false
    }
},{timestamps:true})
 





export type User=InferSchemaType<typeof userSchema> 
export type Users=Array<User>

const UserModel=mongoose.model('User',userSchema)
export default UserModel