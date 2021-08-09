const {Schema, model} = require('mongoose')

const Course = new Schema({
    courseName: {type:String, unique:true, required:true},  //Название курса
    teacherID: {type: Schema.Types.ObjectId, ref: 'User'},  //id преподавателя
    teacherName: {type:String, required:true},              //Имя преподавателя
    imgPath: {type:String},                                 //Изображение курса (путь до картинки)
    courseType: {type:String},                              //Тип курса (экзамен/зачет)
    groups: [{type: Schema.Types.ObjectId, ref: 'Group'}]   //Группы с этим курсом
})

module.exports = model('Course', Course)