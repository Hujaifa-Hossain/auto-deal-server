const reviewModel = require("../models/reviewModel");

// add review
const post_review = async (req, res) => {
  const newReview = new reviewModel({
    user: req.body.user,
    email: req.body.email,
    stars: req.body.stars,
    review: req.body.review,
  });

  try {
    const saveReview = await newReview.save();
    res.status(201).json(saveReview);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get cars
const get_reviews = async (req, res) => {
  let data = await reviewModel.find({});
  try {
    res.json(data);
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = {
  post_review,
  get_reviews,
};
