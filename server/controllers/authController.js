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
            const {login, password, role} = req.body;

            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({login, password: hashPassword, role})
            await user.save()
            return res.status(201)
    }

    async login (req,res,next) {

    }

    async check (req,res, next){

            const token = generateJwt(req.user.id, req.user.login, req.user.role)
            if(!token) {
                return next(ApiError.badRequest('Ошибка токена')) 
            }
            return res.json({token})
    }
}

module.exports = new AuthController()