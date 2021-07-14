const {Schema, model} = require('mongoose')

const User = new Schema({
    login: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    role: {type:String, required:true, default: "USER"},
})

module.exports = model('User', User)