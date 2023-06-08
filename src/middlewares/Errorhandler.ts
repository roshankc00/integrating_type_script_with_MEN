// Not FOund Error Handler 
import { Request,Response,NextFunction } from "express"

export const notFound=(req:Request,res:Response,next:NextFunction)=>{
    const error=new Error(`Route Not Found ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// Error Handler 

export const  handleError=(err:Error,req:Request,res:Response,next:NextFunction)=>{
    const statuscode=res.statusCode?res.statusCode:500;
    res.status(statuscode);
    res.json({
        status:false,
        message:err?.message,
    })
}
