import { Request,Response,RequestHandler } from "express"
import asyncHandler from 'express-async-handler'
import NoteModel, { allNote } from "../models/note"
import {Note} from '../models/note'
import { userNote } from "../utility/types"
import validateMongoId from '../utility/validateMongoId'

// get all the notes
 export const getAllNote:RequestHandler=asyncHandler(async(req:Request,res:Response)=>{
 try {
    const notes=await NoteModel.find<allNote>({})
    res.status(200).json({
        sucess:true,
        notes
    })
    
 } catch (error:any) {
    throw new Error(error)
    
 }
})


// create the note

export const createNote:RequestHandler=asyncHandler(async(req:Request,res:Response)=>{
   try {
      const data:userNote={
         title:req.body.title,
         tag:req.body.tag,
         text:req.body.text
      }
      const note=await NoteModel.create(data) 
      res.status(200).json({
         sucess:true,
         message:"notes has been added sucessfully"
      })      
   } catch (error:any) {
      throw new Error(error)
   }   
})


// getasingle the note 
export const getASingleNote:RequestHandler=asyncHandler(async(req:Request,res:Response)=>{
   const id=req.params.id
   try {
    validateMongoId(id)
   const note=await NoteModel.findById<Note>(id);
   if(!note){
      throw new Error("notes not found")
   }
   res.status(200).json({
      sucess:true,
      note
   })
   
 } catch (error) {
   
 }


})

