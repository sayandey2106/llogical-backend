import Form from "../models/form.js";

//CREATE

export const createForm=(async (req,res,next)=>{
    const newForm =new Form(req.body);
   try {
    const savedform = await newForm.save();
     res.status(200).json(savedform);
   } catch (error) {
      next(error)  
   }
});

//UPDATE
export const updateForm=( async (req,res,next)=>{

    try {
     const updatedForm = await Form.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(updatedForm);
    } catch (error) {
       next(error)  ;
    }
 });

//GET
 export const getForm=(async (req,res,next)=>{

    try {
     const form = await Form.findById(req.params.id);
      res.status(200).json(form);
    } catch (error) {
      next(error) 
    }
 })


//GET ALL
export const getAllForms=(async (req,res,next)=>{

    try {
     const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      next(error) 
    }
 })

//DELETE

export const deleteForm=(async (req,res,next)=>{

    try {
     const deleteForm = await Form.findByIdAndDelete(req.params.id);
     res.status(200).json("Video deleted successfully!");
    }
    catch (error) {
     next(error)  
     }
 })