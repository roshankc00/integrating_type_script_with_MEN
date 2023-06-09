const mongoose=require('mongoose')

const validateMongodbId=(id:string)=>{
    const isvalid=mongoose.Types.ObjectId.isValid(id);
    if(!isvalid){
        throw new  Error ("this Id is not Valid or found")
    }
}

module.exports={validateMongodbId}