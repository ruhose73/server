const {Schema, model} = require('mongoose')

const User = new Schema({
    login: {type:String, unique:true, required:true},   //Login
    email: {type:String, unique:true, required:true},   //Email
    name: {type: String, required:true},                //ФИО
    password: {type:String, required:true},             //Пароль
    role: {type:Number, required:true, default: "1"},   //Роль (студент, преподаватель, работник)
    isActivated: {type:Boolean, default: false},        //Статус активации
    activationLink: {type: String},                     //Ссылка на активацию
    groupName: {type:String, required:true}             //Имя группы 
})

module.exports = model('User', User)