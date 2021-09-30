const authService = require('../services/authService')
const {validationResult} = require('express-validator')
const ApiError = require('../handlers/apiError')
const path = require("path")

class AuthController {

    //  http://localhost:5000/ecosystem/auth/register
    async register (req,res,next) {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.badRequest('Ошибка при валидации'))
            }
            const {email,password} = req.body
            const userData = await authService.registration(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/ecosystem/auth/login
    async login (req,res,next) {
        try {
            const {email,password} = req.body
            const userData = await authService.login(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    //  http://localhost:5000/ecosystem/auth/activate/:link
    async activate (req,res,next) {
        try {
            const activationLink = req.params.link
            const link = await authService.activate(activationLink)
            if(!link) {
                return res.sendFile(path.join(__dirname, '../public', 'activated.html'))
            }
            return res.sendFile(path.join(__dirname, '../public', 'activationError.html'))
        } catch (e) {
            next(e)
        }
    }
}


module.exports = new AuthController()