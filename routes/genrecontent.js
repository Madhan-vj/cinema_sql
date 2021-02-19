const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async(req,res)=>{
  try{
    console.log(req.params.id);
    let id = req.params.id;
   let data = await db.GenreContent.findAll({
     include:[{
      model: db.Genre
     }]
   });
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


// router.get('/',async(req,res)=>{
//  try{
//   let data = await db.GenreContent.findAll();
//   res.status(200).json({
//     message : data
//   })
//  }
//  catch(err){
//   res.status(404).json({
//    message: err
//   })
//  }
// })

router.post('/',async(req,res)=>{
 try{
  let result = await db.GenreContent.create({
   genreId : req.body.genreId,
   contentId : req.body.contentId
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
   await db.GenreContent.destroy({
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

