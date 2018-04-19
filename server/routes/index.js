const routes = require('express').Router();
const user = require('../controllers/users');
const account = require('../controllers/accounts');
const qbank = require('../controllers/qbank');
const tutor = require('../controllers/tutor');
const candidate = require('../controllers/candidate');
const assessment = require('../controllers/assessment');


routes.use('/users',  user)
routes.use('/accounts',  account)
routes.use('/qbank',  qbank)
routes.use('/tutor',  tutor)
routes.use('/candidate',  candidate)
routes.use('/assessment',  assessment)

// enable this for root route
// routes.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

module.exports = routes;
