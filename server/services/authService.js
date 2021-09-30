const User = require('../models/User')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const ApiError = require('../handlers/apiError')
const UserDto = require('../dto/userDto')
const tokenService = require('./tokenService')
const mailService = require('./mailService')


class AuthService {

    async registration(email,password) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.badRequest('Пользователь с таким email уже существует')
        }
        const hashedPassword = await bcrypt.hash(password,5)
        const activationLink = uuid.v4()
        const user = await User.create({email, password: hashedPassword, activationLink})
        const userLink = process.env.API_URL + '/ecosystem/auth/activate/' + activationLink
        await mailService.sendActivationMail(email,userLink)
        const userDto = new UserDto(user)
        const token = tokenService.generateToken ({...userDto})
        return {token, user:userDto}
    }

    async login (email, password) {
        const user = await User.findOne({where: {email}})
        if(!user) {
            throw ApiError.badRequest('Пользователь с таким email не был найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.badRequest('Неверные данные')
        }
        const userDto = new UserDto(user)
        const token = tokenService.generateToken ({...userDto})
        return {token, user: userDto}
    }

    async activate (activationLink) {
        const user = await User.findOne({where: {activationLink}})
        if(!user) {
            throw ApiError.badRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true
        user.activationLink = null
        await user.save()
    }
}

module.exports = new AuthService();