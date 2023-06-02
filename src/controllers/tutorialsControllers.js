const server=require( "../app.js");
const express = require('express');
const path = require('path');
const { Tutorial,Category }=require("../db.js")



let getTutorials=async()=>{

let allCategorias=await Category.findAll();
let allTutorials = await Tutorial.findAll({ include: Category });


let data=allCategorias.map(cate=>{let descrip=cate.descrip; 
	return{[descrip]:allTutorials.filter(tuto=>tuto.CategoryId==cate.id)
.sort( (a,b)=>{

	if(a.name[0]==b.name[0]){

		if(a.name[2]==1){return 1}else return -1
	}
	else return a.name[0]-b.name[0]



	 }) }});



return data
 
}


let controllerPost=async(nombre,descripcion,categoria,video)=>{




let allCategorias=await Category.findAll();


if (typeof Category == Number){ 

try{
const tutorial = await Tutorial.create({name:nombre,descrip:descripcion,video:"/videos/"+Date.now()+video,CategoryId:categoria});
return tutorial}
catch(error){throw new Error (error)}
}

else {
try{
	
let categoriaNueva = await Category.create({descrip:categoria});
let idCategoria=categoriaNueva.dataValues.id;
const tutorial = await Tutorial.create({name:nombre,descrip:descripcion,video:"/videos/"+video,CategoryId:idCategoria});
return tutorial
}
catch(error){throw new Error (error)}
}
}


module.exports={getTutorials,controllerPost}