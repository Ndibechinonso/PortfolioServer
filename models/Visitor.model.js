var mongoose = require("mongoose");
var db = require("../utils/dbConnection");

const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
});

module.exports = mongoose.model("PortfolioVisitor", visitorSchema);
