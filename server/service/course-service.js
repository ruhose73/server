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
}

module.exports = new CourseService();