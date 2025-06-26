const {Sequelize} = require('sequelize');

//Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('postgres','Primeira API','giordano123',{
    host:'localhost',
    dialect:'postgres'
});

module.exports = sequelize;

