var jwt				 = require('jsonwebtoken'),
	config           = require('../config');
// ======================MIDDLEWARE====================== \\
var isLoggedIn = (req, res, next)=>{
	console.log(typeof req.headers.authorization)
	var token = req.headers.authorization
	if(token){
	  	try {
			const decoded = jwt.verify(JSON.parse(token), config.secret) 
			console.log("============>",decoded)
			//console.log(jwt.verify(token, config.secret) )
			req.token     = token
            req.user      = decoded;
            if(decoded){
				console.log('we are in business!')
                return next();
            }
	  	} 
	  	catch(error) { 
			  console.log('	e r r o r', error)
		  	res.json ({error:error})
	  	}	 
	}


}
module.exports = isLoggedIn;