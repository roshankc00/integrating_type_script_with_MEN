import mongoose from "mongoose";
import 'dotenv/config'
import env from  '../utility/validateEnv'
export const connectDb=()=>{
    mongoose.connect(env.MONGO_URL).then(()=>{
    console.log("connected to the database")
}).catch((err)=>{
    console.log(err)
})
}