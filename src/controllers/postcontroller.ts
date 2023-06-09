import { Request,Response } from "express"
import asynHandler from 'express-async-handler'
import NoteModel, { allNote } from "../models/note"
import {Note} from '../models/note'

 export const getAllNote=asynHandler(async(req:Request,res:Response)=>{
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
