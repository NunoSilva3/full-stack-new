var router 		  = require('express').Router(),
    controller 	  = require('../controllers/categoriesController'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/showAll', controller.showAll);
    router.post('/create', controller.create)
    router.post('/delete', controller.deleteCategory)



module.exports = router