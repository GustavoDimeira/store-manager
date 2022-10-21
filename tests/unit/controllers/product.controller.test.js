const sinonChai = require('sinon-chai');

const { returnService } = require('../mock/products.mock');
const productService = require('../../../src/controllers/product.controller');
const productController = require('../../../src/controllers/product.controller');
const { expect } = require('chai');

chai.use(sinonChai);

describe('Testa controller de produtos', function () {
  describe('Lista todos os produtos', function () {
    it('Se lista todos os produtos', async function () {
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'serviceGetAll').resolves(returnService);

      await productController.controllerGetAll({}, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(returnService.message);
    });
  });
});