const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async(req,res)=>{
 try{
  console.log("fetching Customer");
  let data = await db.Customer.findAll();
   res.status(200).json(data);
 }
 catch(err){
  console.log(err);
  res.status(404).json({
   message: err
  });
 }
})

router.post('/',async(req,res)=>{
 try{
  console.log("posting");
  let results = await db.Customer.create({
   name : req.body.name,
   subscriptionId: req.body.subscriptionId
  })
  res.status(200).json({
   message:results
  })
 }
 catch(err){
  res.status(404).json({
   message:err
  })
 }
})

router.delete('/:id',async(req,res)=>{
 try{
   console.log('Deleted');
   await db.Customer.destroy({
     where:{id:req.params.id}
   })
   res.status(202).json({
     message:'Deleted'
   })
 }
 catch(err){
   res.status(404).json({
     message:err
   })
 }
})
module.exports = router;