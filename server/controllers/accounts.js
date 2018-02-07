const account = require('express').Router();
const Account = require('../models/account');
const jwt = require('../common/jwt');

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
    Account.find({}, (err, accounts) =>{
      if(err){
        res.status(400).json(err)
      }else{
        res.status(200).json(accounts)
      }
    })
  })
})
account.put('/:id', (req, res)=>{
  console.log("updating");
  console.log(req.params.id);
  console.log(req.body.account);
  let acc=req.body.account
  // Model.update(query, { $set: { name: 'jason bourne' }}, options, callback)
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
  // res.status(200).json(req.body.account)
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
