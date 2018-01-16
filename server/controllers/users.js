const user = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const key = 'SwaraTanishqa'; //can be moved to a config file

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
})

user.post('/login', (req, res) => {
  User.findOne({email:req.body.user.username}, function(err, user){
    if(err) throw err;
    if(!user){
      res.json({
        token: null,
        data: "Unknown user"
      })
    }else{
    User.comparePassword(req.body.user.password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        let data={
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
        let token=jwt.sign(data, key)
        res.json({
          token: token,
          data: data
        })
      }else{
        res.json({
          token: null,
          data: "Unknown user"
        })
      }
    })
  }
  });
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
