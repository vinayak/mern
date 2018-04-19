const assessment = require('express').Router();
const Assessment = require('../models/assessment');
const jwt = require('../common/jwt');

assessment.get('/', jwt.authenticateUser, (req, res) => {
  Candidate.find({}, (err, users) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(users)
    }
  })
})

assessment.post('/',jwt.authenticateUser, (req, res) => {
  let assessment=req.body.assessment
  console.log(assessment);
  delete assessment.active
  let newAssessment = new Assessment(assessment)
  newAssessment.save(function(err, assessment){
    if (err){
      res.status(400).json(err)
    }else{
      res.status(200).json(assessment)
    }
  })
  // res.status(200).json(assessment)
})

module.exports = assessment;
