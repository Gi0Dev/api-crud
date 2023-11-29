# API CRUD 

Esta é uma API CRUD simples que gerencia uma tabela de cadastros em um banco de dados MySQL. Ela permite a criação, leitura, atualização e exclusão de cadastros.

## Pré-requisitos

- Node.js
- MySQL
- Insomnia, Postman (ou qualquer cliente HTTP similar para testar a API)

## Configuração

1. Clone o repositório:

   ```shell
   git clone 
   atenção: se o projeto todo foi clonado corretamente com as dependencias como node_modules, package.json, etc. Não é necessario seguir o passo 2.
2. Instalação e dependências:

    cd "API"
    npm init -y
    npm install express --save
    npm install body-parser
    npm install sequelize --save
    npm install mysql2

3. Configure o banco de dados:

    Crie um banco de dados MySQL.
    Edite o arquivo sequelize.js e insira as informações de conexão corretas (nome do banco de dados, nome de usuário e senha).

4. Execute o servidor:

    cd src
    node app.js

    A API estará rodando em http://localhost:3000.

## Endpoints:

   - POST /adicionarcadastro -Cria um novo cadastro. Enviar um objeto JSON no corpo da solicitação com os campos nome, data_nascimento e email.

   - GET /cadastros -Gera uma Lista com as informações de todos os cadastros.

   - GET /cadastro/:id -Obtém informações de um cadastro específico com base no ID.

   - PATCH /alterarcasdastro/:id -Atualiza informações de um cadastro específico com base no ID. Enviar um objeto JSON no corpo da solicitação com os campos que deseja atualizar.

   - DELETE /deletarcadastro/:id -Exclui um cadastro específico com base no ID.

## Testes:

    Crie todas as rotas (endpoints) no Insomnia ou postman, por exemplo, com os respectivos métodos HTTPs (POST, GET, PATCH, DELETE). Depois, basta executar a requisição.
    Exemplo de Corpo da Solicitação (JSON) para requisição POST ou PATCH:
    {
        "nome": "Poatan",
        "data_nascimento": "1988-04-18",
        "email": "alexpoatan@gmail.com"
    }
    Exemplo de endpoint de requisição get para listar um produto pelo id:

    GET - localhost:3000/cadastros/1 -
    resultado da solicitação: status OK (200)
    preview:
    {
        "id": 1
        "nome": "Poatan",
        "data_nascimento": "1988-04-18"
        "email": "alexpoatan@gmail.com",
    }
    nota: não epecificamos o campo id ao criar um cadastro pois o mesmo é incrementado automaticamente.


# api-crud
