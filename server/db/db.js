var pg = require('pg');
var Sequelize = require('sequelize');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hunt';

module.exports = new Sequelize('huntdb', 'chou', 'md5ad97d7c05d1713e498b0d4963008c89e', {
  host:'localhost',
  dialect: 'postgres'
});