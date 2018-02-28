const routes = require('express').Router();
const user = require('../controllers/users');
const account = require('../controllers/accounts');
const qbank = require('../controllers/qbank');


routes.use('/users',  user)
routes.use('/accounts',  account)
routes.use('/qbank',  qbank)

// enable this for root route
// routes.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

module.exports = routes;
