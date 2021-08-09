const ApiError = require('../handler/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const uuid = require('uuid')
const MailService = require('../service/mail-service')
const TokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dto')

class AuthController {

    async register (req,res,next) {

        try{
            const {login,email,name,password, role, group} = req.body;

            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const activationLink = uuid.v4()
            const user = await User.create({login,email,name, password: hashPassword, role, activationLink, groupName:group})
            const userLink = process.env.API_URL + '/universystem/authUser/activate/' + activationLink
            console.log(userLink)

            //! Проблема с google API, активации по почте пока что нет
            //! await MailService.sendActivationMail(email, userLink)
            
            const userDto = new UserDto(user)
            const tokens = TokenService.generateToken({...userDto})
            await TokenService.saveToken(userDto.id, tokens.refreshToken)
            //если https то добавить флаг secure в значение true
            res.cookie('refreshToken', tokens.refreshToken, {maxAge:30 *24 * 60 * 60 * 1000, httpOnly: true})
            
            return res.status(201).json({...tokens})

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }

    async login (req,res,next) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email})
            if(!user) {
                return next(ApiError.badRequest(e))
            }
            const isPassEquals = await bcrypt.compare(password, user.password)
            if(!isPassEquals) {
                return next(ApiError.badRequest(e))
            }
            const userDto = new UserDto(user)
            const tokens = TokenService.generateToken({...userDto})
            await TokenService.saveToken(userDto.id, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge:30 *24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(201).json({...tokens})
        } catch (e) {
            return next(ApiError.internal(e)) 
        }
    }

    async logout (req,res,next) {
        try {
            const {refreshToken} = req.cookies
            const token = await TokenService.removeToken(refreshToken)
            res.clearCookie('refreshToken');
            return res.status(201).json({message:'Успешный выход'})
        } catch (e) {
            return next(ApiError.internal(e))   
        }
    }

    async refresh (req,res,next) {
        try {

            const {refreshToken} = req.cookies
            if(!refreshToken) {
                return next(ApiError.badRequest(e))
            }
            const userData = TokenService.validateRefreshToken(refreshToken)
            const tokenFromDb = await TokenService.findToken(refreshToken)

            if (!tokenFromDb || !userData) {
                return next(ApiError.UnauthorizedError())
            }

            const user = await User.findById(userData.id)
            if(!user) {
                return next(ApiError.badRequest(e))
            }
            const userDto = new UserDto(user)
            const tokens = TokenService.generateToken({...userDto})
            await TokenService.saveToken(userDto.id, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge:30 *24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(201).json({...tokens})
        } catch (e) {
            return next(ApiError.internal(e)) 
        }
    }

    async activate (req,res,next) {
        try {
            const activationLink = req.params.link
            const user = await User.findOne({activationLink})
            if(!user) {
                return res.status(400).json({message: "Неккоректная ссылка активации"})
            }
            const activate = await User.findOneAndUpdate({activationLink}, {isActivated: true}) 
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            return next(ApiError.internal(e)) 
        }
    }
}

module.exports = new AuthController()