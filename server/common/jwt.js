const jwt = require('jsonwebtoken');
const key = 'SwaraTanishqa'; //can be moved to a config file

module.exports.createToken = function(data){
  return jwt.sign(data, key)
}

module.exports.authenticateUser = function(req, res, next){
  const bHeader=req.headers["authorization"];
  if(typeof bHeader !== 'undefined'){
    const bearer = bHeader.split(' ');
    req.token = bearer[1];
    jwt.verify(bearer[1], key, function(err, data){
      if(err){
        console.log("got brearer but failed")
        res.sendStatus(403);
      }else{
        console.log("JWT Success")
        next()
      }
    })
  }else{
    res.sendStatus(403);
  }
}
