const productService = require('../services/productService');

const getAll = async (req, res) => {
  const result = await productService.getAll();
  if (!result) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const resultId = await productService.getById(id);
  if (!resultId) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(resultId);
};

const create = async (req, res) => {
  const { err } = await productService.create(req.body);

  if (err) {
    return res.status(201).json(err);
  }
};

module.exports = {
  getAll, getById, create,
};