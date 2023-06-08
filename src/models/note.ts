import  { Schema,InferSchemaType, model } from "mongoose";

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


export type Note=InferSchemaType<typeof noteSchema>

 const NoteModel=model<Note>("Note",noteSchema)
 export default NoteModel