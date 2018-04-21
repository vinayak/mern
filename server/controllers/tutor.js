const tutor = require('express').Router();
const Tutor = require('../models/tutor');
const jwt = require('../common/jwt');
const nodemailer = require('nodemailer');

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
function sendInviteMail(tutor, url){
  let body=`Hello ${tutor.firstName}, <br/>
  Please click the below link to set your password.<br/><br/>
  <a href='${url[0]}//${tutor.domain}.${url[1]}/setpassword/${tutor._id}'>Set Password</a>
  `
  const mailOptions= {
      from: 'Eazeenet<eazeenet@gmail.com>',
      to: 'Vinayak M<vinay@yopmail.com>',
      subject: 'Message from Sears',
      html: body
    }
    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
}

tutor.get('/', jwt.authenticateUser, (req, res) => {
  Tutor.find({}, (err, tutors) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(tutors)
    }
  })
})

tutor.get('/:id', (req, res)=>{
  Tutor.findById(req.params.id, (err, tutor) => {
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).json(tutor)
    }
  })
})

tutor.put('/setpassword/:id', (req, res)=>{
  let credential=req.body.credential
  //check for validation and update
  let hash=Tutor.getHashPassword(credential.password, (hash)=>{
    console.log(hash);
    Tutor.update({_id: req.params.id }, {$set:{
      password: hash
    }}, (err, tutor)=>{
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(tutor)
      }
    })
  })
})

tutor.put('/:id', (req, res)=>{
  let tutor=req.body.tutor
  arr=['_id', '__v', 'password', 'email']
  Tutor.findById(req.params.id, (err, oldObject) => {
	if (err) return handleError(err);
	Tutor.schema.eachPath(function(path) {
      if(!arr.includes(path)){
	    	oldObject[path] = tutor[path];
	    }
	})
	oldObject.save(function(err) {
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(tutor)
    }
	 });
  })

})

tutor.post('/',jwt.authenticateUser, (req, res) => {
  let tutor=req.body.tutor
  delete tutor.domains
  delete tutor.type
  delete tutor.errors
  let invite=tutor.invite
  let newTutor = new Tutor(tutor)
  let url=req.headers['origin'].split('//')
  newTutor.save(function(err, tutor){
    if (err) throw err;
    if(invite){
      sendInviteMail(tutor, url)
    }
    res.status(200).json(tutor)
  })
})

tutor.post('/login', (req, res) => {
  console.log(req.body);
  Tutor.findOne({email:req.body.username}).exec(function(err, tutor){
    if(err) throw err;
    if(!tutor){
      res.json({
        token: null,
        data: "Unknown user"
      })
    }else{
    Tutor.comparePassword(req.body.password, tutor.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        let data={
          firstName: tutor.firstName,
          lastName: tutor.lastName,
          email: tutor.email,
          id:tutor._id
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

module.exports = tutor;
