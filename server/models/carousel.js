let mongoose = require('mongoose');

let carouselSchema =mongoose.Schema({
  title:{
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  }
});
let Carousel = module.exports  = mongoose.model('Carousel', carouselSchema );
