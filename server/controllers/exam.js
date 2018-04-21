const exam = require('express').Router();
const jwt = require('../common/jwt');
const Assessment = require('../models/assessment');

exam.get('/:id', jwt.authenticateUser, (req, res)=>{
  Assessment.findById(req.params.id, (err, test) => {
    if(err){
      res.status(400).send(err)
    }else{
      console.log(test);
      /*
       1.check if the user is assigned to this test
       2.check if the user has already taken the exam
       3. restructure the data and send it to client.
      */
      console.log(test.users.includes(req.loggedUser.id));
      console.log(req.loggedUser);
      res.status(200).json(test)
    }
  })
})

module.exports = exam;
