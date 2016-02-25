var pg = require('pg');
var Sequelize = require('sequelize');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:/hunt';

module.exports = new Sequelize('hunt', 'chou', '', {
  host:'localhost',
  dialect: 'postgres'
});