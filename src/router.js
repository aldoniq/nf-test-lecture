const Router = require('express')
const greetingController = require('./controller/greetingController')
const authController = require('./controller/authController')
const authMiddleware = require('./middleware/authMiddleware')

const router = new Router()

router.get('/hello', authMiddleware, greetingController.hello)
router.post('/login', authController.login)
router.post('/registration', authController.registration)



module.exports = router