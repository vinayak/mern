let mongoose = require('mongoose');

let qbankSchema =mongoose.Schema({
  question:{
    type: String,
    required: [true, "Question is required"]
  },
  ans: {
    type: {},
    required: [true, "Answer is required"]
  },
  option:{
    type:[String]
  },
  type:{
    type: String,
    required: [true, "Type is required"]
  }
}, {timestamps:{}});


let Bank = module.exports  = mongoose.model('Bank', qbankSchema );

/*
creator_id
tags array of strings

*/
