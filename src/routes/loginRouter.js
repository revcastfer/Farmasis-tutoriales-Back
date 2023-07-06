const express =require ("express")
const {Router}=express;
const loginValidateHandler=require("../handlers/loginHandlers.js");

loginRouter=Router();

loginRouter.post("/",loginValidateHandler);



module.exports= loginRouter