const mongoose = require('mongoose');


const commentsSchema = new mongoose.Schema({

 		body:String,
		post_id:String,
		user_id:String,

})

module.exports = mongoose.model('comments',commentsSchema);