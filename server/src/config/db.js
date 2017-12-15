const mongoose = require('mongoose');
const keys = require('./keys');

// set mongoose promise to use global promise
mongoose.Promise = global.Promise;

// set mongoose to debug mode during development
if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true)
}

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

// import our mongoose models
require('../models/User');
require('../models/Event');
