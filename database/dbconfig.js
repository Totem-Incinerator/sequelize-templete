const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME || 'permissions_roles_template';
const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbDialect = process.env.DB_DIALECT || 'mysql';

const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: dbDialect,
    logging:false
})

module.exports = {
    db
}