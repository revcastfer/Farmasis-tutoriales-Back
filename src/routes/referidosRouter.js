const express = require('express');
const {Router} = express;

const sendEmail=require ("../handlers/referidosHandler.js")



referidosRouter=Router();



referidosRouter.post("/",sendEmail)



module.exports=referidosRouter