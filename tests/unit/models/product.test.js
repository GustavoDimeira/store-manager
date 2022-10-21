const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models/productModel');
const connection = require('../../../src/models/connection');

describe('Model de produtos', function () {
  describe('Listar produtos', function () {
    const expectReturn = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      }

    ];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([expectReturn]);
    });

    it('Deve retornar um array com todos os elementos', async function () {
      const result = await productModel.modelGetAll();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(expectReturn);
    });

    afterEach(() => {
      sinon.restore();
    })
  });
});

