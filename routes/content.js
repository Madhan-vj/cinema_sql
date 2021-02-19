const express = require('express');
const router = express.Router();
const db = require('../models');

// fetch content details by content Id
router.get('/contentId/:id',async(req,res)=>{
  try{
    console.log(req.params.id);
    let id = req.params.id
   console.log("fetching Content");
   let data = await db.Content.findAll({
    include: [{
      model: db.ContentType,
      as:'contentType',
    },{
      model: db.Movie,
      as:'movie',
    },{
      model: db.Episode,
      as:'episode',
    }]
   })
   .then(contentData => {
    let resObj;
    contentData.map(contentTypeData => {
      if(contentTypeData.id == id){
        if(contentTypeData.contentType.name == 'WebSeries'){
          resObj = Object.assign(
          {},
          {
            contentTitle : contentTypeData.title,
            contentDescription : contentTypeData.name,
            contentType: contentTypeData.contentType.name,
            contentTypeDetails: contentTypeData.episode.map(episodes => {
                return Object.assign(
                  {},{
                    Season : episodes.seasonId,
                    episodeName : episodes.name,
                    episodeVideoId : episodes.videoId
                  }
                )
            })
          }
        )
      }else{
        resObj = Object.assign(
          {},
          {
            contentTitle : contentTypeData.title,
            contentDescription : contentTypeData.name,
            contentType: contentTypeData.contentType.name,
            contentTypeDetails: contentTypeData.movie.map(movies => {
                return Object.assign(
                  {},{
                    movieVideoId : movies.videoId
                  }
                )
            })
          }
        )
      }
     }
    })
    return resObj;
   });
    res.status(200).json(data);
  }
  catch(err){
   console.log(err);
   res.status(404).json({
    message: err
   });
  }
 })
 
//fetch genre details by genre Id
router.get('/genreId/:id',async(req,res)=>{
 try{
  console.log(req.params.id);
  let id = req.params.id
  let data = await db.Content.findAll({
      include: [{
        model: db.Genre,
        as:'genre',
    },{
      model: db.ContentType,
      as:'contentType',
    }]
  }).then(users => {
    // console.log(users);
    let c = 0;
    let findGenre=[];
    users.map(contentData =>{ 
     contentData.genre.map(genreData => {
      if(genreData.id == id){
        let find =
        `{
          "content_id": "${contentData.id}",
          "contentTitle": "${contentData.title}",
          "contentDescription": "${contentData.name}",
          "genreName":"${genreData.name}",
          "contentType":"${contentData.contentType.name}"
        }`;
        findGenre[c] = JSON.parse(find);
        c = c + 1;
      }
    });
    })
       return findGenre
  })
   res.status(200).json(data);
 }
 catch(err){
  console.log(err);
  res.status(404).json({
   message: err
  });
 }
})

router.get('/',async(req,res)=>{
  try{
   console.log("fetching Content");
   let data = await db.Content.findAll();
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
  let results = await db.Content.create({
   title: req.body.title,
   name : req.body.name,
   contentTypeId : req.body.contentTypeId,
   isAlwaysFree : req.body.isAlwaysFree,
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
   await db.Content.destroy({
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