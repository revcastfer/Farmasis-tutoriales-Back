const getCategoriaContr=require("../controllers/categoriasControllers.js") 


getCategorias=async(req,res)=>{

	try{
let categoria=await	getCategoriaContr();
res.status(200).json(categoria)}
catch (error){res.status(500).send(error)}

}



module.exports=getCategorias