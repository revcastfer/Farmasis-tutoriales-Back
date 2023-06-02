const  express=require("express");
const {Router}=express;
const getCategorias=require("../handlers/categoriasHandler.js")


categoriaRouter=Router();
categoriaRouter.get("/",getCategorias)


module.exports=categoriaRouter
