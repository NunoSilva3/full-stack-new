const mongoose = require('mongoose');
const imagesSchema = new mongoose.Schema({                  
    my_public_id:String,
    my_url:String,
    PostID:String,
    CategoryID:String,
});

module.exports = mongoose.model('images', imagesSchema);