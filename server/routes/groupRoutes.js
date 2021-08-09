const Router = require('express')
const router = new Router
const groupController = require('../controllers/groupController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/createGroup', groupController.createGroup)  
router.post('/addStudentToGroup', groupController.addStudentToGroup)     
router.post('/addCoursesToGroup', groupController.addCoursesToGroup)  

module.exports = router