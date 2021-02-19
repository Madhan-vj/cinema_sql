const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async(req,res)=>{
 try{
  let data = await db.RelatedGenre.findAll();
  res.status(200).json({
    message : data
  })
 }
 catch(err){
  res.status(404).json({
   message: err
  })
 }
})

router.post('/',async(req,res)=>{
 try{
  let result = await db.RelatedGenre.create({
   genreId : req.body.genreId,
   relatedGenreId : req.body.genreId
  })
  res.status(200).json({
   message: result
  })
 }
 catch(err){
  res.status(404).json({
   message: err
  })
 }
})

 router.delete('/:id',async(req,res)=>{
  try{
   await db.RelatedGenre.destroy({
    where: {id : req.params.id}
   })
   res.status(202).json({
    message: 'deleted'
   })
  }
  catch(err){
    console.log(err);
   res.status(404).json({
    message: err
   })
  }
 })

 module.exports = router;

