const Router = require('express')
const router = new Router
const courseController = require('../controllers/courseController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/createCourse', courseController.createCourse )  
router.post('/addGroupToCourse', courseController.addGroupToCourse )     

module.exports = router