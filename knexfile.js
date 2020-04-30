const dotenv = require('dotenv').config();

const { CLIENT, HOST, DATABASE, USERNAME, PASSWORD } = process.env;

module.exports = {

  development: {
    client: CLIENT,
    connection: {
      host: HOST,
      user: USERNAME,
      password: PASSWORD,
      database: DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
};
