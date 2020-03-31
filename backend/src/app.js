const express = require('express');

// Determina quem pode acessar a aplicação
const cors = require('cors');

const { errors } = require('celebrate');

// Tem que passar o './' para identificar que é um arquivo, não um pacote
const routes = require('./routes');

const app = express();

// origin dentro do cors: endereço do aplicação
app.use(cors());

// Informar a utilização de json para as requisições
app.use(express.json());
app.use(routes);

// Retorna um json com errors
app.use(errors());

module.exports = app;