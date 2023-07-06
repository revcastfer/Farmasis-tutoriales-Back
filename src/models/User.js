const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    ID:{type: DataTypes.UUID,defaultValue: DataTypes.UUIDV4,allowNull:false,primaryKey:true},
    name: {type: DataTypes.STRING,allowNull: false},
    password:{type:DataTypes.STRING,allowNull:false},
     },{timestamps:false}  )}
