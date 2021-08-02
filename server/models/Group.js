const {Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {type:String, unique:true, required:true}, //название группы
    groupType: {type:Number, required:true}, //бакалавриат/магистратура/аспирантура
    year: {type:Number, required:true}, //год обучения
})

module.exports = model('Group', Group)