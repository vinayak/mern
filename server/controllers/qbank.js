const qbank = require('express').Router();
const Bank = require('../models/bank');
const jwt = require('../common/jwt');

qbank.get('/', jwt.authenticateUser, (req, res) => {
  Bank.find({}, (err, questions) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(questions)
    }
  })
})

qbank.post('/',jwt.authenticateUser, (req, res) => {
  console.log("creating........");
  console.log(req.body.question);
  let question=req.body.question
  let newQuestion = new Bank({
    question: question.question,
    ans: question.ans,
    option: question.option,
    type: question.type
  })
  newQuestion.save(function(err, question){
    if (err) throw err;
    res.status(200).json(req.body.question)
  })
})
module.exports = qbank;
