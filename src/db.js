require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_DEPLOY,DB_DATABASE
} = process.env;

//const sequelize = new Sequelize(DB_DEPLOY, {
//  logging: false, // set to console.log to see the raw SQL queries
//  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//});     
const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Tutorial } = sequelize.models;
const { Category } = sequelize.models;
const { User } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Category.hasMany(Tutorial);
Tutorial.belongsTo(Category);

cargaData=()=>{
  const cfc= User.create({name:"Cesarin",password:"m050521"});
  const adm= User.create({name:"administrador",password:"Farma2023"});

  const basico = Category.create( {descrip:"basico"} );
  const extras = Category.create( {descrip:"extras"} );
  const cortos = Category.create( {descrip:"cortos"} );

 
  const adminDeUsuarios=Tutorial.create({name:"1.-Administracion de Usuarios" , descrip:"en este video comprenderemos como crear distintos usuarios y aplicar las politicas necesarias dependiendo de su funcion en la empresa" ,
                                   video:"/videos/Administracion De Usuarios.m4v", CategoryId:1 });
  const precios=Tutorial.create({name:"2.-Precios" , descrip:"colocaremos los distints precios cada producto" ,
                                   video:"/videos/Precios Tutorial.m4v", CategoryId:1 });
  const productos=Tutorial.create({name:"3.-Creacion de producto" , descrip:"aprenderemos como crear productos,verificando el factor y añadiendo correctamente la descripcion" ,
                                   video:"/videos/Creacion De Producto Tutorial.m4v", CategoryId:1 });
  const otrosIngresos=Tutorial.create({name:"4.-Otros ingresos y Otras salidas" , descrip:"sumar o restar cajas o unidades al stock q ya tenemos, de manera rapida y sin muchos requisistos" ,
                                   video:"/videos/Otros Ingresos Y Otras Salidas.m4v", CategoryId:1 });
  const transferencias=Tutorial.create({name:"5.-Transferencia entre sucursales" , descrip:"enviar y recibir mercaderia entre las distintas sucursales" ,
                                   video:"/videos/Transferencias.m4v", CategoryId:1 });
  const prepedidos=Tutorial.create({name:"5.1.-Pre-pedidos" , descrip:"generar peticiones para reposicíon de mercaderia" ,
                                   video:"/videos/Prepedidos.m4v", CategoryId:1 });
  const ventas=Tutorial.create({name:"6.-venta de productos" , descrip:"realizar ventas con el sistema farmasis" ,
                                   video:"/videos/Ventas Tutorial.m4v", CategoryId:1 });
  const sunat=Tutorial.create({name:"7.-Envios a SUNAT" , descrip:"como comunicar manualmente sus comprobantes a sunat" ,
                                   video:"/videos/Sunat Tutorial.m4v", CategoryId:1 });
  const Guias=Tutorial.create({name:"7.1.-Guias Electronicas" , descrip:"realizar el envio de guias electronicas" ,
                                   video:"/videos/Guias Electronicas.m4v", CategoryId:1 });
  const compras=Tutorial.create({name:"8.-ingreso de compras por factura" , descrip:"ingresar su factura de compras al sistema" ,
                                   video:"/videos/compras.m4v", CategoryId:1 });
  const vencimiento=Tutorial.create({name:"8.1.-definicion de fechas de vencimiento" , descrip:"entender el manejo de las fechas por parde de nuestro sistema" ,
                                   video:"/videos/DEf. Fechas De Vencimiento.m4v", CategoryId:1 });
  const digemid=Tutorial.create({name:"9.-envio de precios a la digemid" , descrip:"como realizar el envio de precios a la digemid mediante archivo excel" ,
                                   video:"/videos/Digemid Tutorial.m4v", CategoryId:1 });
  const cuadre=Tutorial.create({name:"Cuadre de caja y Registro de ventas" , descrip:"poder realizar el cuadre de caja con las herramientas del sistema farmasis" ,
                                   video:"/videos/Cuadre De Caja Y Reg De Ventas.m4v", CategoryId:2 });
  const servicios=Tutorial.create({name:"facturacion de servicios" , descrip:"facturar servicio como agentes, metropolitano , etc" ,
                                   video:"/videos/servicios.mp4", CategoryId:2 });
  const incentivos=Tutorial.create({name:"Incentivos" , descrip:"logre q su personal venda dterminados productos brindandoles un incentivo monetario" ,
                                   video:"/videos/Incentivos Tutorial.m4v", CategoryId:2 });
  const inventario=Tutorial.create({name:"Inventario" , descrip:"verificar y corregir el stock de cada uno de sus productos" ,
                                   video:"/videos/Inventario.m4v", CategoryId:2 });
  const receta=Tutorial.create({name:"productos controlados" , descrip:"hacer necesaria el ingreso de una receta mediac para la venta de algunos productos" ,
                                   video:"/videos/Receta Medica.m4v", CategoryId:2 });

 


  const codBarras=Tutorial.create({name:"Codigo de barras" , descrip:"implementar codigo de barras a los productos" ,
                                   video:"/videos/exCodBarras.m4v", CategoryId:3 });
  const facturaA4=Tutorial.create({name:"Facturas en A4" , descrip:"como estraer las facturas en formato A4 para su respectivo envio por wasap o correo" ,
                                   video:"/videos/exFacturaA4.m4v", CategoryId:3 });
  const faltaDeStock=Tutorial.create({name:"Reporte de falta de stock" , descrip:"como llenar el reporte de falta de stock" ,
                                   video:"/videos/exPorFaltaStock.m4v", CategoryId:3 });
  const regVentas=Tutorial.create({name:"Registro de ventas" , descrip:"extraer el registro de ventas para el area contable" ,
                                   video:"/videos/exRegVentas.m4v", CategoryId:2 });
  const sunatAnulacionResumen=Tutorial.create({name:"Sunat anulacion-resumenes" , descrip:"comunicacion de anulaciones a sunat y envio de boletas  por resumnes " ,
                                     video:"/videos/exSunatAnulacionResumen.m4v", CategoryId:3 });
}



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
  cargaData    // para importart la conexión { conn } = require('./db.js');
};
