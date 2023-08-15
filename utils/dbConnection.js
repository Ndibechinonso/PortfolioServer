var mongoose = require('mongoose');

//Set up mongoose connection
var mongoDB = process.env.MONGOURI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if (!err) {
    console.log('database connection successful')
  }
});

//Get the default connection
var dbConnection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports =  dbConnection