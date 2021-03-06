var express = require('express');
var router = express.Router();
var axios = require('axios')
const { response } = require('express');
require('dotenv').config();
// const session = require('express-session');


var mongoose = require('mongoose');

//Set up mongoose connection
var mongoDB = 'mongodb+srv://nonso1:pipper@cluster0.h3kxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if (!err) {
    console.log('database connection successful')
  }
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String
})

const PortfolioVisitor = mongoose.model('PortfolioVisitor', userSchema)

/* Add New User. */
router.post('/', function (req, res) {
 
  PortfolioVisitor.create({
    name: req.body.name,
    email: req.body.email,
    feedback: req.body.feedback
  }, (err, newPortfolioVisitor) => {
    if (err) {
      return res.status(500).json({ message: err })
    }
    else {
      return res.status(200).json({ message: 'You successfully submitted your feedback', newPortfolioVisitor })
    }
  })
});


router.get('/', function(req, res) {
res.send("You  hit the feedback route")
});


module.exports = router;
