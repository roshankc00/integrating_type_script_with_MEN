import { RequestHandler,Request,Response } from "express";
import asyncHandler=require('express-async-handler')
import { Loginbody, Password, Registerbody, tokenData } from "../utility/types";
import UserModel, { User,Users} from "../models/user";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import env from '../utility/validateEnv'



export const registerUser:RequestHandler<any,any,Registerbody,any>=asyncHandler(async(req:Request,res:Response)=>{
    try {
        const password:string=req.body.password
        console.log(req.body)
        if(!req.body.email ||!req.body.password ||!req.body.username){
            throw new Error("all the fields are necessary")
        }
        const user=await UserModel.findOne({email:req.body.email})
        if(user){
            throw new Error("User already exists")
        }else{
            const hasPass=await bcrypt.hash(password,10)
            let newUser=await UserModel.create({
                email:req.body.email,
                username:req.body.username,
                password:hasPass
            })
            const data:tokenData={
                id:newUser._id
            }
            const token=jwt.sign(data,env.SECRET)
            
            res.status(200).json({
                sucess:true,
                message:"user created sucessfully",
                token
            })
        }

    } catch (error:any) {
        throw new Error(error)
        
    }
})


// login the user 

export const loginUser:RequestHandler<any,any,Loginbody,any>=asyncHandler(async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await UserModel.findOne({email}).select("+email +password").exec()
        if(!user){
            throw new Error("User doesnt exists")
        }

        const pass:any=user.password
        const isTrue:boolean=await bcrypt.compare(password,pass)
        if(!isTrue){
            throw new Error("enter the valid password")
        }
        const data:tokenData={
            id:user._id
        }
        const token=jwt.sign(data,env.SECRET)
        res.status(200).json({
            sucess:true,
            message:"user login sucessfully",
            token
        })


        
    } catch (error:any) {
        
        throw new Error(error)
    }
})