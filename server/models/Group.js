const {Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {type:String, unique:true, required:true},   //название группы
    groupType: {type:Number, required:true},                //бакалавриат/магистратура/аспирантура
    year: {type:Number, required:true},                     //год обучения
    students: [{type: Schema.Types.ObjectId, ref: 'User'}], //Студенты группы
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}]  
})

module.exports = model('Group', Group)