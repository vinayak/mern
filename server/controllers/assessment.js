const assessment = require('express').Router();
const Assessment = require('../models/assessment');
const jwt = require('../common/jwt');

assessment.get('/', jwt.authenticateUser, (req, res) => {
  Assessment.find({}, (err, assessments) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(assessments)
    }
  })
})

assessment.get('/:id', jwt.authenticateUser, (req, res) => {
  Assessment.findById(req.params.id, (err, assessment) => {
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).json(assessment)
    }
  })
  console.log(req.params.id);
})

assessment.put('/:id', (req, res)=>{
  let assessment=req.body.assessment
  console.log(assessment);
  Assessment.update({_id: req.params.id }, {$set:{
    basic: assessment.basic,
    config: assessment.config,
    questions: assessment.questions,
    users: assessment.users,
    publish: assessment.publish,
  }}, (err, assessment)=>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(assessment)
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
