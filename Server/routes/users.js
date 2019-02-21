var router 		  = require('express').Router(),
	controller 	  = require('../controllers/userController'),
	isLoggedIn	  = require('../middlewares/isLoggedIn')


router.get('/', controller.find);
router.post('/register', controller.register);
router.post('/login',controller.login);
router.post('/update',isLoggedIn, controller.update);
module.exports = router