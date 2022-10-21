const { expect } = require('chai');
const sinon = require('sinon');

const { productModel } = require('../../../src/models/productModel');
const productService = require('../../../src/services/product.service');
const { mockProducts } = require('../mock/products.mock');

describe('Testando product service', function () {
  describe('Listar produtos', function () {
    it('Caso de sucesso, model deve retornar um array com todos os elementos', async function () {
      sinon.stub(productModel, 'modelGetAll').resolves(mockProducts);

      const result = await productService.serviceGetAll();

      expect(result.message).to.be.a('array');
      expect(result.message).to.be.eq(mockProducts);
    });

    afterEach(() => {
      sinon.restore();
    })
  });
});
