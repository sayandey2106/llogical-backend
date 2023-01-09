import mongoose from "mongoose";
import { Schema } from "mongoose";

const FormSchema = new Schema({
     name: {
        type: String,
        required: true,
     },
    email:{
        type: String,
        required: true,
        
        } ,
   
    address:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    school:{
        type: String,
        required: true,
    },
    
    class:{
        type: String,
        required: true,

    },
    board:{
        type: String,
        required: true,

    },
    course:{
        type: String,
        required: true,

    },
  
    
    

    },{timestamps:true});

    export default mongoose.model("Form",FormSchema);