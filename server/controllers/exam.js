const exam = require('express').Router();
const jwt = require('../common/jwt');
const Assessment = require('../models/assessment');
const Question = require('../models/bank');

exam.get('/:id', jwt.authenticateUser, (req, res)=>{
  Assessment.findById(req.params.id, (err, test) => {
    if(err){
      res.status(400).send(err)
    }else{
      // console.log(test);
      result={}
      result['basic']= test.basic
      result['config'] = test.config
      /*
       1.check if the user is assigned to this test
       2.check if the user has already taken the exam
       3. restructure the data and send it to client.
      */
      // console.log(test.users.includes(req.loggedUser.id));
      // console.log(req.loggedUser);
      questionIds=Object.keys(test.questions)
      Question.find({'_id': {$in: questionIds}}, 'question type option ans',function(err, questions){
        //console.log(questions);
        result['questions']=structureQuestion(questions, test.config)
        res.status(200).json(result)
      })
    }
  })
})
function structureQuestion(questions, config){
  // console.log(questions);
  if(config.shuffleQ){
    questions = shuffle(questions)
  }
  /*
    shuffle match the following ans
    remove ans from all the questions
    someway manage the right option so that can be compared with ans
    take question heading in MTF

  */

  if(config.shuffleO){

  }
  return questions
  // console.log(q);
}


function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}


module.exports = exam;
