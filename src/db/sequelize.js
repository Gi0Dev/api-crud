const {Sequelize} = require('sequelize');

//conexão com o banco de dados
const sequelize = new Sequelize('nome do banco', 'usuario', 'senha', {

    host: 'localhost',
    dialect: 'mysql'
})
module.exports = sequelize;

