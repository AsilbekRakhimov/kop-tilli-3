import mongoose from "mongoose";

const createProductSchema = new mongoose.Schema({
    name: {
        type:Object
    },
    description:{
        type:Object
    },
    count:{
        type : Number
    }
},{
    _id:true,
    collection:"products",
    timestamps:true
});

export const product = mongoose.model("products", createProductSchema);