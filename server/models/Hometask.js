const {Schema, model} = require('mongoose')

const Hometask = new Schema({
    taskName: {type:String, unique:true, required:true},    //Название группы  
    lesson:   {type: Schema.Types.ObjectId, ref: 'Lesson'}, //Ссылка на таблицу с уроками (пары)
    text: {type:String},                                    //Описание задания
    //! Добавить ссылку на файлы (модель)
    //! Создать модель файлов
})

module.exports = model('Hometask', Hometask)