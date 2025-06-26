const {Sequelize} = require('sequelize');

//Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('Primeira API','postgres','giordano123',{
    host:'localhost',
    dialect:'postgres'
});

module.exports = sequelize;

