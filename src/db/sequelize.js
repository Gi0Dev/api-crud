const {Sequelize} = require('sequelize');

//conexão com o banco de dados
const sequelize = new Sequelize('usuario', 'root', '1234', {

    host: 'localhost',
    dialect: 'mysql'
})
module.exports = sequelize;

