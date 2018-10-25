'use strict';

const app = require('../src/app');
const debug = require('debug')('wagner:server');//nodestr eu que dei  nome...
const http = require('http');

//depende do sv, ele vai ganha uma porta, se não vai na 3000...
const port = normalizePort(process.env.PORT || '3000');
app.set('port',port); //setando a porta em que ele vai trabalhar

const server = http.createServer(app);

server.listen(port); //Colocando o servidor para ouvir a porta
server.on('erro',onError);
server.on('listening',onListening);

console.log("Api rodando na porta -> " + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0) {
        return port;
    }

    return false;
}

function onError(error){ //Controlar erros do sv... não da aplicação
    if (error.syscall != 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch(error.code) {
        case 'EACCES':
            console.error(bind = ' requer permissão privilegiada')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' enderaço está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() { //startar o debug..;
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}