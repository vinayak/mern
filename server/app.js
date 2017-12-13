const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Validator = require('validator');

const app = express();

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

let Carousel = require('./models/carousel')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Done!!!')
})

app.listen(3001, () => {
  console.log('Express started at 3001');
})
