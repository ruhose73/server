const User = require('../models/User')
const Group = require('../models/Group')
const Course = require('../models/Сourse')
const UserInfo = require('../dtos/user-info')


class UserService {

    async getInfoById(userId) {
        try{
            const user = await User.findById(userId)
            console.log(user)
            const group = await Group.findOne({groupName: user.groupName})
            //console.log(user.groupName)
            const courses = await Course.findById(group.courses)
            //console.log(group.courses)
            const userInfo = new UserInfo(user, group, courses)
            return userInfo
        } catch (e) {
            return null
        }
    }
}

module.exports = new UserService();