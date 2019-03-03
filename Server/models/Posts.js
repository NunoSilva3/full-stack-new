const mongoose = require('mongoose');


const postsSchema = new mongoose.Schema({
		title:{type: String, required : true},
		body:{type: String, required : true},
		category_id:{type: String, required : true},
		user_id:{type: String, required : true},
		photo_url:String,
})

module.exports = mongoose.model('posts',postsSchema);