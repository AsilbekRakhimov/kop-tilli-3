import mongoose from "mongoose";

const signUserSchema = new mongoose.Schema({
    full_name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    _id:true,
    collection:"users",
    timestamps:true
})

export const user = mongoose.model("users", signUserSchema);