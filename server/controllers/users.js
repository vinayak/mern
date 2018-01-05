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
  let newuser= new User();
  newuser.title=req.body.title
  newuser.content=req.body.content
  newuser.save((err, user)=>{
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).send(user)
    }
  })
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
