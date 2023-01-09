import express from "express";
import Form from "../models/form.js";
import { createForm } from "../controllers/form.js";
import { updateForm } from "../controllers/form.js";
import { getAllForms,getForm } from "../controllers/form.js";
// import {  } from "../controllers/form.js";
import { deleteForm } from "../controllers/form.js";



const router =  express.Router();


//CREATE
router.post('/',createForm)

//UPDATE

router.put('/:id', updateForm)

//GET
router.get('/:id',getForm)

//GET ALL
router.get('/',getAllForms) 
//DELETE
router.delete('/:id', deleteForm)

export default router;