const Course = require('../models/Сourse')

class CourseService {

    async getCoursesInfoById(coursesId) {
        try{
            const courses = await Course.findById(coursesId)
            console.log(courses)
            return courses
        } catch(e){
            return null
        }
    }

    async createCourse(courseName,teacherID,courseType) {
        try{
            const createCourse = await Course.create({courseName,teacherID,courseType})
            console.log(createCourse)
            return createCourse
        } catch(e) {
            return null
        }
    }

    async addGroupToCourse (courseId,groups) {
        try{
            const addGroup = await Course.findByIdAndUpdate({courseId}, {$push: { courses } }) 
            console.log(addGroup)
            return addGroup
        } catch(e) {
            return null
        }
    }
}

module.exports = new CourseService();

//courseName: {type:String, unique:true, required:true},    +
//teacherID: {type: Schema.Types.ObjectId, ref: 'User'},    +
//teacherName: {type:String, required:true},    +
//imgPath: {type:String},       
//courseType: {type:String},    +
//groups: [{type: Schema.Types.ObjectId, ref: 'Group'}]  