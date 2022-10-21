const productModel = require('../models/productModel');

const modelGetAll = async () => productModel.modelGetAll();

const modelGetById = async (id) => productModel.modelGetById(id);

const modelCreate = async (name) => productModel.modelCreate(name);

module.exports = {
  modelGetAll, modelGetById, modelCreate,
};