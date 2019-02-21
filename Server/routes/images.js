var router 		  = require('express').Router(),
    controller 	  = require('../controllers/imagesController'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/find', controller.find)
    router.post('/upload', isLoggedIn,  controller.addImages)



module.exports = router