const User = require('../models/User')

class UserService {

    async getUserInfoById(userId) {
        try{
            const user = await User.findById(userId)
            console.log(user)
            return user
        } catch (e) {
            return null
        }
    }
}

module.exports = new UserService();

