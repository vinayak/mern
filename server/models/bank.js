let mongoose = require('mongoose');

let qbankSchema =mongoose.Schema({
  question:{
    type: String,
    required: [true, "Question is required"]
  },
  ans: {
    type: String,
    required: [true, "Answer is required"]
  },
  option:{
    type:[String]
  }
}, {timestamps:{}});


let Bank = module.exports  = mongoose.model('Bank', qbankSchema );

/*
creator_id
tags array of strings

*/
