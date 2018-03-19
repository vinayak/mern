const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost/swara', { useMongoClient: true });

let db = mongoose.connection;
db.on('error', function(err){
  console.log(err);
})
db.once('open', function(){
  console.log('Connected to MongoDB');
})
let user =new User({
  firstName: 'Vinay',
  lastName: 'Admin',
  email: 'vinay.malavade@gmail.com',
  password: '123',
  role: 'SuperAdmin',
  active: true,
  domain: '*'
})

User.createUser(user, function(err, user){
  if (err) throw err;
  console.log(user)
  mongoose.connection.close();
})

/*
module.exports.init =function(){
  console.log("He ho");
}

this.init()

To run this file use
node seed.js

to run a exported method from a command line use
node -e 'require("./seed").init()'
*/
