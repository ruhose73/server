const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')

router.get('/getOwnerInfo', userController.getOwnerInfo) 
router.post('/getInfo', userController.getInfo) 

module.exports = router