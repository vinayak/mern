let mongoose = require('mongoose');

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
    required: [true, "Password is required"]
  }
});
let User = module.exports  = mongoose.model('User', userSchema );
