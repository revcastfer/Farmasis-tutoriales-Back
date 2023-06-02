
const nodemailer = require('nodemailer');

let envioCorreoReferido=async(nombre,apellido,numero,relacion,nombreReferido,apellidoReferido,nroReferido)=>{


let testAccount = await nodemailer.createTestAccount();


try{ 
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "nuevosventasfarmasis@gmail.com",
      pass: "ymfoqgedcdiptjeb"
    },
  });


const info = await transporter.sendMail({
    from: 'nuevosventasfarmasis@gmail.com', // sender address
    to: "soporte@farmasis.site, revcastfer@gmail.com ", // list of receivers,
    subject: "NUEVO REFERIDO ✔", // Subject line
    text: `TENEMOS UN NUEVO REFERIDO!!
           cliente :  ${nombre} ${apellido},
           con numero : ${numero} ,
           indica q es : ${relacion} ,
           el cliente a contactar se llama : ${nombreReferido} ${apellidoReferido},
           y su numero de telefono es : ${nroReferido} `, // plain text body
   
 

})
}

catch(err){return err}

  



}


module.exports=envioCorreoReferido