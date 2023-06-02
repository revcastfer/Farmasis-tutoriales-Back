const express = require('express');
const {Router} = express;
const multer  = require('multer')
const storage=multer.diskStorage({
destination:"./src/videos",
filename: (req,file,cb)=>{cb(null,Date.now()+file.originalname)}
});

const upload = multer({ storage:storage,dest: './src/videos' })



const {tutorialsHandler,postTutorials,getVideo}=require ("../handlers/tutorialshandler.js")



tutorialsRouter=Router();

tutorialsRouter.get("/",tutorialsHandler);

tutorialsRouter.post("/",upload.single('video'),postTutorials);
tutorialsRouter.get("/:name",getVideo);


module.exports=tutorialsRouter