import express from 'express'
const app=express()

const PORT:number=5000;

app.get('/',(req,res)=>{
    res.json({name:"wow Roshan"})
})

app.listen(PORT,()=>{
    console.log(`runnning at the ${PORT}`)
})