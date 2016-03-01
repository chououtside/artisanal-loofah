var pg = require('pg');
var Sequelize = require('sequelize');

module.exports = new Sequelize('hunt', 'root', 'password', {
  host:'localhost',
  dialect: 'postgres'
});