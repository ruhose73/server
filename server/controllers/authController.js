const ApiError = require('../handler/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const generateJwt = (id, login,role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AuthController {



    async register (req,res,next) {
        try {

        } catch (err) {
            return next(ApiError.internal('Ошибка сервера', err))
        }

    }

    async login (req,res,next) {
        try {

        } catch (err) {
            return next(ApiError.internal('Ошибка сервера', err))
        }
    }

    async check (req,res, next){
        try {
            const token = generateJwt(req.user.id, req.user.login, req.user.role)
            if(!token) {
                return next(ApiError.badRequest('Ошибка токена',1)) 
            }
            return res.json({token})
        } catch (err) {
            return next(ApiError.internal('Ошибка сервера', err))
        }
    }
}

module.exports = new AuthController()