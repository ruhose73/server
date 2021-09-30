const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')
const Group = require('./Group')

const User = sequelize.define('user', {

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING, required: true, unique: true},
    phone: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING, required: true},

    first_name: {type: DataTypes.STRING},
    middle_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    group_id: {type: DataTypes.INTEGER, required: true, references: {
            model: Group,
            key: "id"
        }},

    role: {type: DataTypes.INTEGER, required: true, defaultValue:0},

    activationLink: {type: DataTypes.STRING, allowNull: true},
    isActivated: {type: DataTypes.BOOLEAN,default: false }
})

module.exports = User