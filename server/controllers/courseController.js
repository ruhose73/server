const ApiError = require('../handler/errorHandler')
const CourseService = require('../service/course-service')
const UserService = require('../service/user-service')


class CourseController {

    async createCourse (req,res,next) {
        try {
            const {courseName,teacherID,courseType} = req.body
            if (!courseName || !teacherID || !courseType) {
                return next(ApiError.internal())
            }
            //! добавить поиск имени учителя по id
            const teacher = await UserService.getUserInfoById(teacherID)
            const createCourse = await CourseService.createCourse(courseName,teacherID,courseType, teacher)
            return res.status(201).json({...createCourse})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }

    async addGroupToCourse (req,res,next) {
        try {
            const {courseId,groups} = req.body
            if (!courseId || !groups) {
                return next(ApiError.internal())
            }
            const addGroupToCourse = await CourseService.addGroupToCourse(courseId,groups)
            return res.status(201).json({...addGroupToCourse})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }
}

module.exports = new CourseController()