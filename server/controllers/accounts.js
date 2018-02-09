const account = require('express').Router();
const Account = require('../models/account');
const Config = require('../models/config');
const jwt = require('../common/jwt');
const mongoose = require('mongoose');

account.get('/', jwt.authenticateUser, (req, res) => {
  Account.find({}, (err, accounts) =>{
    if(err){
      res.status(400).json(err)
    }else{
      console.log(accounts);
      res.status(200).json(accounts)
    }
  })
})


account.post('/',jwt.authenticateUser, (req, res) => {
  let account=req.body.account
  let newAccount = new Account({
    name: account.name,
    domain: account.domain,
    expiry: account.expiry
  })
  newAccount.save(function(err, account){
    if (err) throw err;
    mongoose.connect('mongodb://localhost/'+account.domain, { useMongoClient: true });
    mongoose.Promise=global.Promise
    mongoose.connection;
    let config = new Config({
      name: account.name,
      domain: account.domain,
      expiry: account.expiry
    })
    config.save(function(cerr, config){
      if (cerr) throw cerr;
      mongoose.connect('mongodb://localhost/swara', { useMongoClient: true });
      mongoose.Promise=global.Promise
      mongoose.connection;
      Account.find({}, (err, accounts) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(accounts)
        }
      })
    })
  })
})
account.put('/:id', (req, res)=>{
  let acc=req.body.account
  Account.update({_id: req.params.id }, {$set:{name:acc.name , domain: acc.domain, expiry: acc.expiry }}, (err, num)=>{
    if(err){
      res.status(400).json(err)
    }else{
      Account.find({}, (err, accounts) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(accounts)
        }
      })
    }
  })
})
account.delete('/:id',  (req, res) => {
  Account.findByIdAndRemove(req.params.id, (err, user) => {
    if(err){
      res.status(400).send(err)
    }else{
      Account.find({}, (err, accounts) =>{
        if(err){
          res.status(400).json(err)
        }else{
          res.status(200).json(accounts)
        }
      })
    }
  })
})

module.exports = account;
