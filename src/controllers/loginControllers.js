const { User }=require("../db.js")

loginValidateController=async(user,password )=>{

const usuario=await User.findOne({where:{name:user}});

if(!usuario){throw new Error( "no se encontro usuario")};
if(usuario.password===password){return true}
else {throw new Error("contraseña errada")} 




return user


}


module.exports=loginValidateController