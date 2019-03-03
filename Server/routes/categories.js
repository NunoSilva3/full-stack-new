var router 		  = require('express').Router(),
    controller 	  = require('../controllers/categoriesController'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/showAll', controller.showAll);
    router.get('/user', isLoggedIn, controller.find_by_user);
    router.post('/create', isLoggedIn, controller.create)
    router.post('/delete', isLoggedIn, controller.deleteCategory)



module.exports = router