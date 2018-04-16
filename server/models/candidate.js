let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let candidateSchema =mongoose.Schema({
  firstName:{
    type: String,
    required: [true, "First Name is required"]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"]
  },
  gender:{
    type: String,
    required: [true, "Gender is required"]
  },
  dob:{
    type: String,
    required: [true, "DOB is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  mobile:{
    type: String,
    required: [true, "Mobile is required"]
  },
  address:{
    type: String,
    required: [true, "Address is required"]
  },
  domain:{
    type: String,
    required: [true, "Domain is required"]
  },
  city:{
    type: String,
    required: [true, "City is required"]
  },
  state:{
    type: String,
    required: [true, "State is required"]
  },
  country:{
    type: String,
    required: [true, "Country is required"]
  },
  zip:{
    type: String,
    required: [true, "Zip is required"]
  },
  password: {
    type: String
  },
  role: {
    type: String,
    default: "Candidate"
  },
  tag: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  }
},{timestamps:{}});
let Candidate = module.exports  = mongoose.model('Candidate', candidateSchema );

module.exports.getHashPassword = function(password, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      callback(hash)
    });
  });
}

module.exports.comparePassword = function(upassword, hash, callback){
  bcrypt.compare(upassword, hash, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  })
}
