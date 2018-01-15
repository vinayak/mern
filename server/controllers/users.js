const user = require('express').Router();
const User = require('../models/user');

user.get('/', (req, res) => {
  User.find({}, (err, users) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(users)
    }
  })
})

user.post('/', (req, res) => {
  let user=req.body.user
  let newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  })
  User.createUser(newUser, function(err, user){
    if (err) throw err;
    console.log(user)
  })
  res.status(200).send(newUser)
  // res.status(500).send(req.body.user)
})

user.delete('/:id',  (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).send(user)
    }
  })

})

module.exports = user;
