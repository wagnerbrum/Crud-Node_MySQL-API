'use strict';

var mysql=require('mysql');

var connection=mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user:'root',
    password:'',
    database:'sua_bd'
});

process.on('SIGINT', () => 
    connection.end(err => {
        if(err){
            return console.log(err);
        }
        console.log('pool => fechado');
        process.exit(0);
    })
);

module.exports=connection;