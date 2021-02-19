const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const Port = 3000;

const content = require('./routes/content');
const contentType = require('./routes/contentType');
const customer = require('./routes/customer');
const episode = require('./routes/episode');
const genre = require('./routes/genre');
const genreContent = require('./routes/genrecontent');
const movie = require('./routes/movie');
const offer = require('./routes/offer');
const offerType = require('./routes/offerType');
const purchase = require('./routes/purchase');
const region = require('./routes/region');
const regionContent = require('./routes/regionContent');
const season = require('./routes/season');
const subscription = require('./routes/subscription');
const subscriptionContent = require('./routes/subscriptionContent');
const subscriptionOffer = require('./routes/subscriptionOffer');
const subscriptionType = require('./routes/subscriptionType');
const video = require('./routes/video');
const relatedGenre = require('./routes/relatedGenre');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
 extended:true
}));

app.use('/content',content);
app.use('/contentType',contentType);
app.use('/customer',customer);
app.use('/episode',episode);
app.use('/genre',genre);
app.use('/genreContent',genreContent);
app.use('/movie',movie);
app.use('/offer',offer);
app.use('/offerType',offerType);
app.use('/purchase',purchase);
app.use('/region',region);
app.use('/regionContent',regionContent);
app.use('/season',season);
app.use('/subscription',subscription);
app.use('/subscriptionContent',subscriptionContent);
app.use('/subscriptionOffer',subscriptionOffer);
app.use('/subscriptionType',subscriptionType);
app.use('/video',video);
app.use('/relatedGenre',relatedGenre);

app.listen(Port,() => {
 console.log(`app running in ${Port}`);
});