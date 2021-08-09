const {Schema, model} = require('mongoose')

const Token = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},   //Пользователь
    refreshToken: {type:String, required:true}          //Рефреш токен
})

module.exports = model('Token', Token)