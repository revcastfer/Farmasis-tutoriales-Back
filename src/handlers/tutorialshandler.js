const {getTutorials, controllerPost}=require("../controllers/tutorialsControllers.js")
const path = require('path');


let tutorialsHandler=async(req,res)=>{
try {
let respuesta=await getTutorials();
res.status(200).json(respuesta)

}
catch (error){ res.status(501).send(error)}

};

let postTutorials=async(req,res)=>{
  
const {nombre,descripcion,categoria}=req.body;
const video = req.file.filename;


try{
	let rpta=await controllerPost(nombre,descripcion,categoria,video);

res.status(200).json(rpta)
}
catch(error){ res.status(501).json({msg:error})}

};


let getVideo=(req,res)=>{

const {name}=req.params;



res.sendfile(path.join(__dirname,`../videos/${name}`) )
}



module.exports={tutorialsHandler,postTutorials,getVideo}