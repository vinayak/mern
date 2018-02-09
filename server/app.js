const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(cors());
mongoose.connect('mongodb://localhost/swara', { useMongoClient: true });
mongoose.Promise=global.Promise
let db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
})

db.once('open', function(){
  console.log('Connected to MongoDB');
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes)


app.use(function (req, res, next) {
  res.status(404).send("No Routes Matching")
})

app.listen(3001, () => {
  console.log('Express started at 3001');
})
