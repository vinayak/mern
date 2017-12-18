const carousel = require('express').Router();
const Carousel = require('../models/carousel');

carousel.get('/', (req, res) => {
  Carousel.find({}, (err, carousels) =>{
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(carousels)
    }
  })
})

carousel.post('/', (req, res) => {
  let csel= new Carousel();
  csel.title=req.body.title
  csel.content=req.body.content
  csel.save((err, carousel)=>{
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).send(carousel)
    }
  })
})

carousel.delete('/:id', (req, res) => {
  Carousel.findByIdAndRemove(req.params.id, (err, carousel) => {
    if(err){
      res.status(400).send(err)
    }else{
      res.status(200).send(carousel)
    }
  })

})

module.exports = carousel;
