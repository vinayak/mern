const routes = require('express').Router();
const carousel = require('../controllers/carousel');

routes.use('/carousel',  carousel)

// enable this for root route
// routes.get('/', (req, res) => {
//   res.status(200).json({message: 'Connected!'})
// })

module.exports = routes;
