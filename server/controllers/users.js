const user = require('express').Router();
const User = require('../models/user');
const jwt = require('../common/jwt');

user.get('/', jwt.authenticateUser, (req, res) => {
  User.find({}, (err, users) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(users)
    }
  })
})

user.post('/',jwt.authenticateUser, (req, res) => {
  let user=req.body.user
  let newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    domain: user.domain
  })
  console.log("creating........");
  User.createUser(newUser, function(err, user){
    if (err) throw err;
    console.log(user)
    res.status(200).send(newUser)
  })
})

user.post('/login', (req, res) => {
  console.log(req.body);
  User.findOne({email:req.body.username}).select('+password').exec(function(err, user){
    if(err) throw err;
    if(!user){
      res.json({
        token: null,
        data: "Unknown user"
      })
    }else{
    User.comparePassword(req.body.password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        let data={
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
        res.json({
          token: jwt.createToken(data),
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
      User.find({}, (err, users) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(users)
        }
      })
      // res.status(200).send(user)
    }
  })
})

module.exports = user;
