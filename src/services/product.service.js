const { productModel } = require('../models');

const errorMessages = require('../helpers/errorMessages');
const statusCode = require('../helpers/statusCodes');

const serviceGetAll = async () => {
  const result = await productModel.modelGetAll();

  // Sucesso
  if (result.length > 0) {
    return { message: result, status: statusCode.OK };
  }

  // Falha
  return {
    message: errorMessages.ProductNotFound,
    status: statusCode.BadRequest,
  };
};

const serviceGetById = async (id) => {
  const resultId = await productModel.modelGetById(id);

  // Sucesso
  if (!resultId) {
    return { message: resultId, status: statusCode.OK };
  }

  // Falha
  return {
    message: errorMessages.ProductNotFound,
    status: statusCode.PageNotFound,
  };
};

module.exports = {
  serviceGetAll,
  serviceGetById,
};