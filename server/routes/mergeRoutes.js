const Router = require('express')
const router = new Router

const AuthRouter = require('./authRouter')

//  http://localhost:5000/ecosystem/auth
router.use('/auth', AuthRouter)

module.exports = router