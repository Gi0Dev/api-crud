const Cadastro = require('../models/cadastro');

Cadastro.sync({force: true}); //codigo para criar a tabela no banco de dados, deve ser executado só uma vez por tabela

exports.criarCadastro = async (req, res) =>{

    try { 
      const novoCadastro = await Cadastro.create(req.body);
      res.status(201).json(novoCadastro);
    } catch (error) {
      res.status(400).json({ error: 'Não foi possível criar o cadastro.' });
    }
};

exports.listarCadastro = async (req, res) => {

    try {
        const cadastros = await Cadastro.findAll();
        res.json(cadastros);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cadastros.' });
      }
};

exports.buscarCadastroId = async (req, res)=>{

    const parametroid = req.params.id;
    const cadastro = await Cadastro.findByPk(parametroid)
    try{
        if (cadastro) {
            res.json(cadastro);
          } else {
            res.status(404).json({ error: 'Cadastro não encontrado.' });
          }
    } catch (error){
        res.status(500).json({ error: 'Erro ao obter informações do cadastro.' });
    }
};

exports.atualizarCadastro =  async (req, res)=>{

    const parametroid = req.params.id;
    const [atualizado] = await Cadastro.update(req.body, { where: {id: parametroid } });
    
    try{
        if (atualizado) {
            res.json({ message: 'Cadastro atualizado com sucesso.' });
          } else {
            res.status(404).json({ error: 'Cadastro não encontrado.' });
          }
    } catch (error){
        res.status(500).json({ error: 'Erro ao atualizar informações do cadastro.' });
    }
    
};

exports.deletarCadastro = async (req, res)=>{

    const parametroid = req.params.id;
    const deletado = await Cadastro.destroy({ where: {id: parametroid } });

  try{
        if (deletado) {
            res.json({ message: 'Cadastro excluído com sucesso.' });
        } else {
            res.status(404).json({ error: 'Cadastro não encontrado.' });
        }
  } catch (error){
    res.status(500).json({ error: 'Erro ao excluir o cadastro.' });
  }
  

};
