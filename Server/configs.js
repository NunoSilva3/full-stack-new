var cloudinary    	= require('cloudinary');
var config = require('./secret')
module.exports = cloudinary.config({ 
  cloud_name: config.name, 
  api_key: config.cloudinary_api_key, 
  api_secret: config.cloudinary_api_secret
});
