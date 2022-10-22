const connection = require('./connection');

const modelGetAll = async () => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products');

  return result;
};

const modelGetById = async (id) => {
  const [resultId] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);

  return resultId[0];
};

const modelCreate = async ({ name }) => {
  const [resultName] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?)', [name]);

  return { id: resultName.insertId, name };
};

module.exports = {
  modelGetAll, modelGetById, modelCreate,
};