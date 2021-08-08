const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')

const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')

router.use('/authUser', authRoutes)
router.use('/user', authMiddleware, userRoutes)

module.exports = router