let mongoose = require('mongoose');

let userSchema =mongoose.Schema({
  title:{
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  }
});
let User = module.exports  = mongoose.model('User', userSchema );
