
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cadastroController = require('../controllers/cadastroController');

//==========crud=========//
//definição dos endpoints e chamada das respectivas funções que manipulam os dados do banco de dados

app.post('/adicionarcadastro', cadastroController.criarCadastro);

app.get('/cadastros', cadastroController.listarCadastro);

app.get('/cadastro/:id', cadastroController.buscarCadastroId);
 
app.patch('/alterarcasdastro/:id', cadastroController.atualizarCadastro);

app.delete('/deletarcadastro/:id', cadastroController.deletarCadastro);
  
  module.exports = app;
