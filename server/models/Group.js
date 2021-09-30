const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Group = sequelize.define('group', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    group_name: {type: DataTypes.STRING, required: true, unique: true},
    group_type: {type: DataTypes.INTEGER, required: true, defaultValue:0},
})

module.exports = Group