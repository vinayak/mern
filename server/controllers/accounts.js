const account = require('express').Router();
const Account = require('../models/account');
const jwt = require('../common/jwt');

account.get('/', jwt.authenticateUser, (req, res) => {
  Account.find({}, (err, accounts) =>{
    if(err){
      res.status(400).json(err)
    }else{
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
    res.status(200).send(account)
  })
})

module.exports = account;
