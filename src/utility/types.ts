import mongoose from "mongoose";

// notes
export interface userNote{
    title:string;
    text:string,
    tag:string
}
export interface userUpdateNote{
    title:string;
    text:string,
    tag:string
}


// user
export interface Registerbody {
    userName:string,
    email:string,
    password:string
}
export interface Loginbody {
    email:string,
    password:string
}

export interface tokenData {
    id:string;

}
export interface Password  {
    Password?:string
}