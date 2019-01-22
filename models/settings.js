const Sequelize = require('sequelize');


const sequelize = new Sequelize('testdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  pool: {
    max: 25,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

module.exports = {
  sequelize, Sequelize
};
