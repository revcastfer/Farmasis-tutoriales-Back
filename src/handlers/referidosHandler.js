const envioCorreoReferido=require('../controllers/referidosController.js')


 let sendEmail=async(req,res)=>{

let {nombre,apellido,numero,relacion,nombreReferido,apellidoReferido,numeroReferido}= req.body;


try{
await envioCorreoReferido(nombre,apellido,numero,relacion,nombreReferido,apellidoReferido,numeroReferido);
res.status(200).send("mensaje enviado")
}
catch(err){res.status(500).json(err.message)}
 }

 module.exports=sendEmail