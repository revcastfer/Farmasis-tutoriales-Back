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
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Category.hasMany(Tutorial);
Tutorial.belongsTo(Category);

cargaData=()=>{
  const basico = Category.create( {descrip:"basico"} );
  const extras = Category.create( {descrip:"extras"} );
  const cortos = Category.create( {descrip:"cortos"} );

 
 

 


  const codBarras=Tutorial.create({name:"codigo de barras" , descrip:"implementar codigo de barras a los productos" ,
                                   video:"/videos/exCodBarras.m4v", CategoryId:3 });
  const facturaA4=Tutorial.create({name:"facturas en A4" , descrip:"como estraer las facturas en formato A4 para su respectivo envio por wasap o correo" ,
                                   video:"/videos/exFacturaA4.m4v", CategoryId:3 });
  const faltaDeStock=Tutorial.create({name:"reporte de falat de stock" , descrip:"como llenar el reporte de falta de stock" ,
                                   video:"/videos/exPorFaltaStock.m4v", CategoryId:3 });
  const regVentas=Tutorial.create({name:"registro de ventas" , descrip:"extraer el registro de ventas para el area contable" ,
                                   video:"/videos/exRegVentas.m4v", CategoryId:2 });
  const sunatAnulacionResumen=Tutorial.create({name:"sunat anulacion-resumenes" , descrip:"comunicacion de anulaciones a sunat y envio de boletas  por resumnes " ,
                                     video:"/videos/exSunatAnulacionResumen.m4v", CategoryId:3 });
}



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
  cargaData    // para importart la conexión { conn } = require('./db.js');
};
