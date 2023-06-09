import { Request,Response,RequestHandler } from "express"
import asyncHandler from 'express-async-handler'
import NoteModel, { allNote } from "../models/note"
import {Note} from '../models/note'
import { userNote, userUpdateNote } from '../utility/types';
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

export const createNote:RequestHandler<any,any,userNote,any>=asyncHandler(async(req:Request,res:Response)=>{
   try {
      if(!req.body.title || !req.body.tag ||!req.body.text){
         throw new Error('All the fields are necessary')
      }
      const note=await NoteModel.create(req.body) 
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
   
 } catch (error:any) {
   throw new Error(error)
   
 }
})


// update the note 
export const updateNote:RequestHandler<any,any,userUpdateNote,any>=asyncHandler(async(req:Request,res:Response)=>{
   try {
      const noteId:string=req.params.id
      validateMongoId(noteId)
      const note=await NoteModel.findByIdAndUpdate<Note>(noteId,req.body,{new:true})
      if(!note){
         throw new Error('the note doesnt exists')
      }
      res.status(200).json({
         sucess:true,
         note
      })      
   } catch (error:any) {
      throw new Error(error)
   }
})

// delete the note 
export const deleteNote:RequestHandler=asyncHandler(async(req:Request,res:Response)=>{
   try {
      const id=req.params.id
      validateMongoId(id)
      const note=await NoteModel.findById<Note>(id).exec()
      if(!note){
         throw new Error("note not found")
      }
    await NoteModel.findByIdAndDelete(id)      
    res.status(200).json({
      sucess:true,
      message:"user has been deleted sucessfully"
    })  
   } catch (error) {
      
   }
})






