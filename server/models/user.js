let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let userSchema =mongoose.Schema({
  firstName:{
    type: String,
    required: [true, "First Name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    select: false
  },
  role: {
    type: String,
    required: [true, "Role is required"]
  },
  active: {
    type: Boolean,
    default: false
  }
});
let User = module.exports  = mongoose.model('User', userSchema );

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password=hash;
      newUser.save(callback);
    });
});
}

module.exports.comparePassword = function(upassword,hash, callback){
  bcrypt.compare(upassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  })
}
