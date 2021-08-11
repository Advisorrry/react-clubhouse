const { Sequelize, Model, DataTypes } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize('postgres', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

(async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})()

module.exports = sequelize
