const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection
    .execute('SELECT id, name FROM StoreManger.products');

  return result;
};

const getById = async (id) => {
  const [resultId] = await connection
    .execute('SELECT id, name FROM StoreManager.products WHERE id = ?', [id]);

  return resultId[0];
};

const create = async ({ name }) => {
  const [resultName] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES(?)', [name]);

  return { id: resultName.insertId, name };
};

module.exports = {
  getAll, getById, create,
};