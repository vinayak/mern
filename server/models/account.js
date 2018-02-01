let mongoose = require('mongoose');

let accountSchema =mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name is required"]
  },
  domain: {
    type: String,
    required: [true, "Domain is required"]
  },
  expiry: {
    type: Date,
    required: [true, "Expiry is required"]
  }
}, {timestamps:{}});
let User = module.exports  = mongoose.model('Account', accountSchema );
