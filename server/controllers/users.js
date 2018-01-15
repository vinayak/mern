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
  let user=req.body.user
  console.log(req.body.user);
  newuser.firstName =user.firstName
  newuser.lastName=user.lastName
  newuser.email=user.email
  newuser.password=user.password
  console.log("(((((((((())))))))))");
  console.log(newuser);
  console.log("(((((((((())))))))))");
  newuser.save((err, user)=>{
    if(err){
      console.log("erorr ......", err);
      res.status(400).send(err)
    }else{
      console.log("success .....");
      res.status(200).send(newuser)
    }
  })
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
