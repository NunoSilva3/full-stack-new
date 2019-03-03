const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: { type: String, unique  : true, lowercase: true, required:true },
  password: { type: String, required:true },
  email:{type: String, /*unique: true,*/ required: true},
	nickName: String ,
	profilePhoto: String,
	moto: String,
  admin   :   {type: Boolean,  default:false}
});

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

const User = mongoose.model('User', userSchema);
module.exports = User;