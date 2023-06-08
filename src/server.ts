import express from 'express'
import 'dotenv/config'
import { connectDb } from './config/connectDb';
import env from './utility/validateEnv'
const app=express()
const PORT=env.PORT;

// connecting to the database
connectDb()

app.get('/',(req,res)=>{
    res.json({name:"from the server"})
})

app.listen(PORT,()=>{
    console.log(`runnning at the ${PORT}`)
})