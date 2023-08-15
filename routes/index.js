var express = require("express");
const feedback = require("../controllers/Feedback");
var router = express.Router();
require("dotenv").config();

/* Add New User. */
router.post("/", feedback);

router.get("/", function (req, res) {
  res.send("You should not be here");
});

module.exports = router;
