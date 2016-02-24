var pg = require('pg');
var Sequelize = require('sequelize');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hunt';

module.exports = new Sequelize('huntdb', 'root', '', {
  host:'localhost',
  dialect: 'postgres'
});