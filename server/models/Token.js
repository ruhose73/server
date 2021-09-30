const sequelize = require("../config/db");
const {DataTypes} = require('sequelize')
const User = require('./User')

const Token = sequelize.define('token', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    user_id: {type: DataTypes.INTEGER, required: true, references: {
            model: User,
            key: "id"
        }},
    refreshToken: {type: DataTypes.STRING, required: true},
})

module.exports = Token

