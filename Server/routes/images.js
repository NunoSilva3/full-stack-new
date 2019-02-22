var router 		  = require('express').Router(),
    controller 	  = require('../controllers/imagesController'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/find', controller.find)
    router.post('/upload', controller.addImages)



module.exports = router