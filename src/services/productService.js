const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

const getById = async (id) => productModel.getById(id);

const create = async (name) => productModel.create(name);

module.exports = {
  getAll, getById, create,
};