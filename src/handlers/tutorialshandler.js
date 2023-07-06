const {getTutorials, controllerPost}=require("../controllers/tutorialsControllers.js")
const path = require('path');


let tutorialsHandler=async(req,res)=>{
try {
let respuesta=await getTutorials();
res.status(200).json(respuesta)

}
catch (error){ res.status(501).send(error.message)}

};

let postTutorials=async(req,res)=>{
  
let {nombre,descripcion,categoria}=req.body;
const video = req.file.filename;

if (categoria.length===1){categoria=Number(categoria)};


try{
	let rpta=await controllerPost(nombre,descripcion,categoria,video);

res.status(200).json(rpta)
}
catch(error){ res.status(501).json(error.message)}

};


let getVideo=(req,res)=>{

const {name}=req.params;



res.sendfile(path.join(__dirname,`../videos/${name}`) )
}



module.exports={tutorialsHandler,postTutorials,getVideo}