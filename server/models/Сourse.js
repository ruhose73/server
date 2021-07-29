const {Schema, model} = require('mongoose')

const Course = new Schema({
    courseName: {type:String, unique:true, required:true},
    teacherID: {type: Schema.Types.ObjectId, ref: 'User'},
    imgPath: {type:String},
    courseType: {type:String}
})

module.exports = model('Course', Course)