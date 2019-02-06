const Schema = require('../models/connection.model');

const check = async (req, res) => {
    res.json({ message : 'check' });
};

const remove = async (req, res) => {
    await Schema.findByIdAndDelete(req.params.id);
    res.status(204);
    res.end();
};

const all = async (req, res) => {
    const connections = await Schema.paginate({}, { page : 2, limit : 10 });
    res.status(200).json(connections);
};

const get = async (req, res) => {
    const connection = await Schema.findById(req.params.id);
    res.status(200).json(connection);
};

const create = async (req, res) => {
    const connection = new Schema(req.body);
    await connection.save();
    res.status(201);
    res.end();
};

module.exports = {
    check,
    remove,
    all,
    get,
    create
};
