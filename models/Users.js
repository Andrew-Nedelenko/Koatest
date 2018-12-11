const {sequelize, Sequelize} = require('./settings')

const User = sequelize.define('datauser', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    post: Sequelize.STRING,
    image: Sequelize.BLOB,
    date: Sequelize.DATE
});

module.exports = {
    User
}