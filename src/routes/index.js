
const express = require('express');
const {Router} = express
const server =require( '../app.js' );

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const tutorialsRouter=require("./tutorialsRouter.js")
const referidosRouter=require("./referidosRouter.js")
const categoriaRouter=require("./categoriaRouter.js")
const loginRouter=require("./loginRouter.js")

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/farmasistutorials',tutorialsRouter);

router.use('/videos',tutorialsRouter) ;

router.use("/referidos",referidosRouter);
router.use("/categorias",categoriaRouter);
router.use("/login",loginRouter);

module.exports = router;
