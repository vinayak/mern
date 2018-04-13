const candidate = require('express').Router();
const Candidate = require('../models/candidate');
const jwt = require('../common/jwt');

candidate.get('/', jwt.authenticateUser, (req, res) => {
  Candidate.find({}, (err, users) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(users)
    }
  })
})

candidate.post('/',jwt.authenticateUser, (req, res) => {
  let user=req.body.candidate
  let newUser = new Candidate({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    password: user.password,
    domain: user.domain
  })
  console.log("creating........");
  User.createUser(newUser, function(err, user){
    if (err) throw err;
    console.log(user)
    User.find({}, (err, users) =>{
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(users)
      }
    })
    // res.status(200).send(newUser)
  })
})

candidate.put('/:id', (req, res)=>{
  let usr=req.body.user
  console.log("go to get updated......");
  console.log(usr);
  User.update({_id: req.params.id }, {$set:{firstName:usr.firstName , lastName: usr.lastName, email: usr.email, role: usr.role }}, (err, num)=>{
    if(err){
      res.status(400).json(err)
    }else{
      User.find({}, (err, users) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(users)
        }
      })
    }
  })
})

candidate.post('/login', (req, res) => {
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

candidate.delete('/:id',  (req, res) => {
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

module.exports = candidate;
