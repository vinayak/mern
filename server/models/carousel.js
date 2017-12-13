let mongoose = require('mongoose');

let carouselSchema =mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
let Carousel = module.exports  = mongoose.model('Carousel', carouselSchema );
