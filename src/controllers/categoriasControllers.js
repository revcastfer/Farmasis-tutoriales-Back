 const { Tutorial,Category }=require("../db.js")

 getCategoriaContr=async()=>{
console.log("llego");
try{
let allCategorias=await Category.findAll();	

return allCategorias
}

catch (error){throw new Error(error)}


 }
 module.exports=getCategoriaContr