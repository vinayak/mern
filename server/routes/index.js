const routes = require('express').Router();
const user = require('../controllers/users');

routes.use('/users',  user)

// enable this for root route
// routes.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

module.exports = routes;
