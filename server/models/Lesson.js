const {Schema, model} = require('mongoose')

const Lesson = new Schema({
    lessonName: {type:String, unique:true, required:true}  //Название группы      
})

module.exports = model('Lesson', Lesson)