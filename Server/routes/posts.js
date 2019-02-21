var router 		  = require('express').Router(),
    controller 	  = require('../controllers/postsController'),
    isLoggedIn	  = require('../middlewares/isLoggedIn');


    router.get('/Search_Posts', controller.find);
    router.get('/posts/:PostID',controller.find_single_post);
    router.get('/category/:categoryID',controller.find_by_cat);
    router.get('/user/:userID', controller.find_by_user);
    router.post('/create', controller.create)
    router.post('/delete', controller.deletePost)



module.exports = router