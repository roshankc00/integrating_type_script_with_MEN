
import jwt,{JwtPayload,Secret} from 'jsonwebtoken'
import UserModel from '../models/user';
import { Request,Response,NextFunction,RequestHandler } from 'express';
import env from '../utility/validateEnv'

export const authMiddleware:RequestHandler=async(req:Request,res:Response,next:NextFunction):Promise<Response | void>=>{
    let token;
    if(req.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1]
        try{
            if(token){
                const decorded:any=jwt.verify(token,env.SECRET)
                console.log(decorded.id)
                const user=await UserModel.findById(decorded?.id).exec()
                console.log(user)
                // req.user=user
                next()
            }
        }
        catch(error){
            throw new Error("Not authorized please Login again")

        }
    }else{
        throw new Error("There is no token attach to the header")

    }
}









