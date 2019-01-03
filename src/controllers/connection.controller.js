const boom = require('boom');
const Connection = require('../models/connection.model');

const check = async (req, res, next) => {
    console.log();
}

const remove = async (req, res, next) => {
    try {
        await Connection.findByIdAndDelete(req.params.id);
        res.status(204);
        res.end();
    } catch (error) {
        throw boom.notFound();
    }
};

const all = async (req, res, next) => {
    const connections = await Connection.paginate({}, { page : 2, limit : 10 });
    res.status(200).json(connections);
};

const get = async (req, res, next) => {
    try {
        const connection = await Connection.findById(req.params.id);
        res.status(200).json(connection);
    } catch (error) {
        throw boom.notFound();
    }
};

const create = async (req, res, next) => {
    const { type, ssh, database, user, password, host } = req.body;
    const connection = new Connection({
        type : type,
        ssh : ssh,
        database : database,
        user : user,
        password, password,
        host : host
    });
    await connection.save();
    res.status(201);
    res.end();
}

module.exports = { check, remove, all, get, create };