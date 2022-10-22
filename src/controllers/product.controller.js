const productService = require('../services/product.service');

const controllerGetAll = async (req, res) => {
  const result = await productService.serviceGetAll(); // retorna o que recebe de service.
  res.status(result.status).json(result.message);
};

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const resultId = await productService.serviceGetById(id);
  res.status(resultId.status).json(resultId.message);
};

// const controllerCreate = async (req, res) => {
//   const { err } = await productService.create(req.body);

//   if (err) {
//     return res.status(201).json(err);
  // }
// };

module.exports = {
  controllerGetAll,
  controllerGetById,
};