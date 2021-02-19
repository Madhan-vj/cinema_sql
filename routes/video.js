const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/',async(req,res)=>{
 try{
  console.log("fetching users");
  let users = await db.Video.findAll();
   res.status(200).json(users);
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
    console.log('Posting');
    let result = await db.Video.create({
      url : req.body.url
    });
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
    console.log('Deleted');
    await db.Video.destroy({
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
