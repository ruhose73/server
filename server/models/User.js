const {Schema, model} = require('mongoose')

const User = new Schema({
    login: {type:String, unique:true, required:true},
    email: {type:String, unique:true, required:true},
    name: {type: String, required:true},
    password: {type:String, required:true},
    role: {type:Number, required:true, default: "1"},
    isActivated: {type:Boolean, default: false},
    activationLink: {type: String},
    groupName: {type:String, required:true}
})

module.exports = model('User', User)