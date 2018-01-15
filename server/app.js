const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/swara', { useMongoClient: true });
let db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
})

db.once('open', function(){
  console.log('Connected to MongoDB');
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

app.use(function (req, res, next) {
  res.status(404).send("No Routes Matching")
})

app.listen(3001, () => {
  console.log('Express started at 3001');
})
