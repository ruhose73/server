const Router = require('express')
const router = new Router
const {body} = require('express-validator')
const AuthController = require('../controllers/authController')

//  http://localhost:5000/ecosystem/auth/register
router.post('/register',
    body('email').isEmail(),
    body('password').isLength({min:8, max:24}),
    AuthController.register
)

//  http://localhost:5000/ecosystem/auth/login
router.post('/login', AuthController.login )

//  http://localhost:5000/ecosystem/auth/activate/:link
router.get('/activate/:link', AuthController.activate)


module.exports = router