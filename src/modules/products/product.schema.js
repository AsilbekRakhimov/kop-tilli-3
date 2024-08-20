import mongoose from "mongoose";

const createProductSchema = new mongoose.Schema({
    name: {
        type:Object
    },
    description:{
        type:Object
    } 
},{
    _id:true,
    collection:"products",
    timestamps:true
});

export const product = mongoose.model("products", createProductSchema);