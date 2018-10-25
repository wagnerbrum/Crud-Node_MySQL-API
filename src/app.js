'use strict';

const express = require('express')
, bodyParser = require('body-parser')
, app = express();

app.use(bodyParser.json());//converter corpo da requisição em json
app.use(bodyParser.urlencoded({ extended: false})); // negar codificação ex %20...

/* Registrar as rotas */
//Carrega as Rotas
const usuarios_route = require('./routes/usuarios');
app.use('/usuarios', usuarios_route);

// middleware de tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
	res.status(500).json({ error: err.toString() });
});


module.exports = app; //exportar a constant app que é meu express todo...
// quando ela é importada, unica coisa que vai é isso...