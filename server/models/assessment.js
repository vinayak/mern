let mongoose = require('mongoose');

let assessmentSchema =mongoose.Schema({
  basic:{
    type: Object
  },
  config: {
    type: Object
  },
  questions: {
    type: Object
  },
  users: {
    type: [String]
  },
  publish: {
    type: Object
  }
}, {timestamps:{}});


let Assessment = module.exports  = mongoose.model('Assessment', assessmentSchema );
