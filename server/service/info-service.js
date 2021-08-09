const UserService = require('./user-service')
const GroupService = require('./group-service')
const CourseService = require('./course-service')
const UserInfo = require('../dtos/user-info')

class InfoService {

    async getAllInfoByUserId(userId) {
        try{
            const user = await UserService.getUserInfoById(userId)
            const group = await GroupService.getGroupInfoByGroupname(user.groupName)
            const courses = await CourseService.getCoursesInfoById(group.courses)
            const userInfo = new UserInfo(user, group, courses)
            return userInfo
        } catch (e) {
            return null 
        }
    }
}

module.exports = new InfoService();