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
  // let url=origin.split('//')
  let body=`Hello ${tutor.firstName}, <br/>
  Please click the below link to set your password.<br/><br/>
  <a href='${url[0]}//${tutor.domain}.${url[1]}/${tutor._id}'>Set Password</a>
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

module.exports = tutor;
