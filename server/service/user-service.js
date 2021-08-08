const User = require('../models/User')
const Group = require('../models/Group')

const UserInfo = require('../dtos/user-info')
const jwt = require('jsonwebtoken')


class UserService {

    getInfoById(userId) {
        try{
            const user = await User.findById(userId)
            const group = await Group.findById(user.group)
            const userInfo = new UserInfo(user, group)
            return userInfo
        } catch (e) {
            return null
        }
    }
}

module.exports = new UserService();