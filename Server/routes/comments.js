var router 		  = require('express').Router(),
    controller 	  = require('../controllers/commentsControllers'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/:postID', controller.find);
    router.get('/find/user', isLoggedIn, controller.find_by_user);
    router.post('/create', isLoggedIn,  controller.create)
    router.post('/update', isLoggedIn, controller.update)
    router.post('/delete', isLoggedIn, controller.deleteComment)



module.exports = router