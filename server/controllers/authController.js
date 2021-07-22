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
            const {login,email, password, role} = req.body;

            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const activationLink = uuid.v4()
            const user = await User.create({login,email, password: hashPassword, role, activationLink})
            await MailService.sendActicationMail(email,activationLink)

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

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }

    async logout (req,res,next) {
        try {

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }

    async refresh (req,res,next) {
        try {

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }

    async activate (req,res,next) {
        try {

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }

    async check (req,res, next){

        try {
            const token = generateJwt(req.user.id, req.user.login, req.user.role)
            if(!token) {
                return next(ApiError.badRequest('Ошибка токена')) 
            }
            return res.json({token})

        } catch (e) {
            return next(ApiError.internal(e)) 
        }

    }
}

module.exports = new AuthController()