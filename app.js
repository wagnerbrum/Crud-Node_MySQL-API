'use strict';

const express = require('express')
, bodyParser = require('body-parser')
, config = require('./config')
, app = express();
//, pool = require('./config/pool-factory')
//, connectionMiddleware = require('./connection/connection-middleware')


app.use(bodyParser.json());//converter corpo da requisição em json
app.use(bodyParser.urlencoded({ extended: false})); // negar codificação ex %20...

// ativando nosso middleware
//app.use(connectionMiddleware(pool));

/* Registrar as rotas */
//Carrega as Rotas
const usuarios_route = require('./routes/usuarios');
app.use('/usuarios', usuarios_route);


// middleware de tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
	res.status(500).json({ error: err.toString() });
});


//Conecta ao banco
//mongoose.connect(config.connectionString);

//Carrega os Models
/*
const Produto = require('./models/produto');
const Cliente = require('./models/cliente');
const Ordem = require('./models/ordem');
*/

//Carrega as Rotas
//const indexRoute = require('./routes/index-route');
/*
const produtoRoute = require('./routes/produto-route');
const clienteRoute = require('./routes/cliente-route');
const ordemRoute = require('./routes/ordem.route');
*/

//app.use('/', indexRoute);
/*
app.use('/produto', produtoRoute);
app.use('/cliente', clienteRoute);
app.use('/ordem', ordemRoute);
*/

module.exports = app; //exportar a constant app que é meu express todo...
// quando ela é importada, unica coisa que vai é isso...

