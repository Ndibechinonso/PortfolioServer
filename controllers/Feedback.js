var PortfolioVisitor = require("../models/Visitor.model");

const feedback = async (req, res) => {
    PortfolioVisitor.create(
      {
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback,
      },
      (err, newPortfolioVisitor) => {
        if (err) {
          console.log(err, "err");
          return res
            .status(500)
            .json({ message: "An error occured, please try again" });
        } else {
          return res.status(200).json({
            message: "Thank you for cntacting me, I will get back to you soon!!!",
            newPortfolioVisitor,
          });
        }
      }
    );
  }

  module.exports = feedback