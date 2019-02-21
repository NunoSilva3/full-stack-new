const mongoose = require('mongoose');


const categoriesSchema = new mongoose.Schema({


    name: String,
    photoUrl: String,
    user_id: String

})

module.exports = mongoose.model('categories',categoriesSchema);