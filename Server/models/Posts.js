const mongoose = require('mongoose');


const postsSchema = new mongoose.Schema({
		title:String,
		body:String,
		category_id:String,
		user_id:String,
		photo_url:String,
})

module.exports = mongoose.model('posts',postsSchema);