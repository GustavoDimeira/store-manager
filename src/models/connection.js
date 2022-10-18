// Arquivo que faz a conexão com o nosso MySql

const mysql = require('mysql2/promise'); // Aqui está usando uma biblioteca que trabalha de modo Async

require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

// Aqui se utiliza um pool de conexões aonde ele  vai manter  a conexão sempre ativa
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

module.exports = connection;
