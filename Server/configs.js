var cloudinary    	= require('cloudinary');
var config = require('./secret')
module.exports = cloudinary.config({ 
  cloud_name: config.cloud_name, 
  api_key: config.api_key, 
  api_secret: config.api_secret
});
