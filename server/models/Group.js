const {Schema, model} = require('mongoose')

const Group = new Schema({
    groupName: {type:String, unique:true, required:true},   //Название группы
    groupType: {type:String, required:true},                //Бакалавриат/магистратура/аспирантура
    year: {type:Number, required:true},                     //Год обучения
    students: [{type: Schema.Types.ObjectId, ref: 'User'}], //Студенты группы (массив)
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}] //Предметы (массив)
})

module.exports = model('Group', Group)