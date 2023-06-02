const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Tutorial', {

    ID:{type: DataTypes.UUID,defaultValue: DataTypes.UUIDV4,allowNull:false,primaryKey:true},
    name: {type: DataTypes.STRING,allowNull: false},
    descrip:{type:DataTypes.STRING,allowNull:false},
    video:{type:DataTypes.STRING ,allowNull:false}, },{timestamps:false}  );





};
