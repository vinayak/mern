const candidate = require('express').Router();
const Candidate = require('../models/candidate');
const jwt = require('../common/jwt');
const nodemailer = require('nodemailer');

candidate.get('/', jwt.authenticateUser, (req, res) => {
  Candidate.find({}, (err, users) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(users)
    }
  })
})
var transporter = nodemailer.createTransport({
  service:'gmail',
  secure: false,
  port:25,
  auth: {
    user: 'eazeenet@gmail.com',
    pass: 'Vinay1248'
  },
  tls: {
    rejectUnauthorized: false
  }
})

function sendInviteMail(candidate, url){
  let body=`Hello ${candidate.firstName}, <br/>
  Please click the below link to set your password.<br/><br/>
  <a href='${url[0]}//${url[1]}/password/${candidate._id}'>Set Password</a>
  `
  const mailOptions= {
      from: 'EazeeNet<eazeenet@gmail.com>',
      to: `${candidate.firstName}<${candidate.email}>`,
      subject: 'Message from EazeeNet',
      html: body
    }
    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
}

candidate.post('/',jwt.authenticateUser, (req, res) => {
  let candidate=req.body.candidate
  delete candidate.type
  delete candidate.errors
  let invite=candidate.invite
  let newCandidate = new Candidate(candidate)
  let url=req.headers['origin'].split('//')
  newCandidate.save(function(err, candidate){
    if (err) throw err;
    if(invite){
      sendInviteMail(candidate, url)
    }
    res.status(200).json(candidate)
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
