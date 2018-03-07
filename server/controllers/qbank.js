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

qbank.get('/:id', jwt.authenticateUser, (req, res) => {
  Bank.findById(req.params.id, (err, question) => {
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).json(question)
    }
  })
  console.log(req.params.id);
})

qbank.put('/:id', (req, res)=>{
  let question=req.body.question
  console.log("go to get updated......");
  console.log(question);
  Bank.update({_id: req.params.id }, {$set:{
    question: question.question,
    ans: question.ans,
    option: question.option,
    type: question.type
  }}, (err, question)=>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(question)
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

qbank.delete('/:id',  (req, res) => {
  Bank.findByIdAndRemove(req.params.id, (err, question) => {
    if(err){
      res.status(400).send(err)
    }else{
      Bank.find({}, (err, questions) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(questions)
        }
      })
    }
  })
})
module.exports = qbank;
