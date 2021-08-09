const Router = require('express')
const router = new Router
const authMiddleware = require('../middleware/authMiddleware')

const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const groupRoutes = require('./groupRoutes')
const courseRoutes = require('./courseRoutes')

router.use('/authUser', authRoutes)
router.use('/user', authMiddleware, userRoutes)
router.use('/group', groupRoutes)
router.use('/course', courseRoutes)

module.exports = router