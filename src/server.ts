import express from 'express'
import 'dotenv/config'
import { connectDb } from './config/connectDb';
import env from './utility/validateEnv'
import noteRoutes from './routes/postRoute'
import userRoutes from './routes/userRoute'
import { notFound ,handleError} from './middlewares/Errorhandler';
import morgan from 'morgan'
const app=express()
const PORT=env.PORT;

// connecting to the database
connectDb()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// all the routes
app.use('/api/v1',noteRoutes)
app.use('/api/v1',userRoutes)




app.use(notFound)
app.use(handleError)
app.listen(PORT,()=>{
    console.log(`runnning at the ${PORT}`)
})