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
    message: errorMessages.notFoundData,
    status: statusCode.BadRequest,
  };
};

module.exports = {
  serviceGetAll,
};