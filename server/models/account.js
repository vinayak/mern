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
    get: formatDate,
    required: [true, "Expiry is required"]
  }
}, {timestamps:{}, toJSON : {getters: true}});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

let Account = module.exports  = mongoose.model('Account', accountSchema );
