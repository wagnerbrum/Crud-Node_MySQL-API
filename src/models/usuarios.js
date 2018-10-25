'use strict';

const db = require('../connection')
, table = 'usuarios';

exports.getAll = async(callback) => {
    try{
        await db.query("select * from "+table, callback);
    } catch (err) {
        return err;
    }
}

exports.getById = async(id, callback) => {
    try{
        await db.query("select * from "+table+" where id=?",[id], callback);
    } catch (err) {
        return err;
    }
}

exports.add = async(Body, callback) => {
    try{
        await db.query("insert into "+table+" values(?,?,?,?)",[Body.id,Body.nome,Body.login,Body.senha], callback);
    } catch (err) {
        return err;
    }
}

exports.delete = async(id, callback) => {
    try{
        await db.query("delete from "+table+" where id=?",[id], callback);
    } catch (err) {
        return err;
    }
}

exports.update = async(id, Body, callback) => {
    try{
        await db.query("update "+table+" set ? where id=?",[Body,id], callback);
    } catch (err) {
        return "err";
    }
}