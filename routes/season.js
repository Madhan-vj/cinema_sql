const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async(req,res)=>{
 try{
  let data = await db.Season.findAll();
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
  let result = await db.Season.create({
   name : req.body.name,
   isAlwaysFree : req.body.isAlwaysFree
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
   await db.Season.destroy({
    where: {id : req.params.id}
   })
   res.status(202).json({
    message: 'deleted'
   })
  }
  catch(err){
   res.status(404).json({
    message: err
   })
  }
 })

 module.exports = router;

