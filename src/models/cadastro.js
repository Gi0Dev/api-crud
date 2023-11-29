const sequelize = require('../db/sequelize');
const {DataTypes} = require('sequelize');

//modelo da tabela do banco de dados que será criada 
const Cadastro = sequelize.define('cadastros', {

    nome: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    data_nascimento: 
    {
        type: DataTypes.DATE,
        allowNull: false
    },

    email:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

})
module.exports = Cadastro;