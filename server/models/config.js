let mongoose = require('mongoose');

let configSchema =mongoose.Schema({
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

let Config = module.exports  = mongoose.model('Config', configSchema );
