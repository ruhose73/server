const {Schema, model} = require('mongoose')

const Course = new Schema({
    courseName: {type:String, unique:true, required:true},
    teacherID: {type: Schema.Types.ObjectId, ref: 'User'},
    teacherName: {type:String},
    imgPath: {type:String},
    courseType: {type:String},
    groups: [{type: Schema.Types.ObjectId, ref: 'Group'}]  
})

module.exports = model('Course', Course)