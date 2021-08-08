const ApiError = require('../handler/errorHandler')
const UserService = require('../service/user-service')
const TokenService = require('../service/token-service')

class UserController {

    async getOwnerInfo (req,res,next) {
        try {
            const accessToken = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            const userId = TokenService.idByAccessToken(accessToken)
            if (!userId) {
                return next(ApiError.UnauthorizedError())
            }
            console.log(userId)
            const userInfo = await UserService.getInfoById(userId)
            if(!userInfo) {
                console.log(userInfo)
                return next(ApiError.internal())
            }
            return res.status(201).json({...userInfo})
        } catch (e) {
            return next(ApiError.internal(e))
        }
    }
}

module.exports = new UserController()