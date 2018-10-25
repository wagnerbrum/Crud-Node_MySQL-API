'use strict';

const usuarios_model = require('../models/usuarios');

exports.getAll = async(req, res, next) => {
    await usuarios_model.getAll(function(err,rows){
        if(err){
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }else{
            res.status(200).json(rows);
        }
    });
};

exports.getById = async(req, res, next) => {
    await usuarios_model.getById(req.params.id,function(err,rows){
        if(err){
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }else{
            res.status(200).json(rows);
        }
    });
};

exports.add = async(req, res, next) => {
    await usuarios_model.add(req.body,function(err,rows){
        if(err){
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }else{
            req.body.id = rows.insertId;
            res.status(201).json(req.body);
        }
    });
};

exports.delete = async(req, res, next) => {
    await usuarios_model.delete(req.params.id,function(err,rows){
        if(err){
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }else{
            res.status(200).json({
                message: 'Deletado com sucesso!'
            });
        }
    });
};

exports.update = async(req, res, next) => {
    await usuarios_model.update(req.params.id, req.body,function(err,rows){
        if(err){
            res.status(500).json({
                message: 'Falha ao processar sua requisição'
            });
        }else{
            res.status(200).json({
                message: 'Editado com sucesso!'
            });
        }
    });
};