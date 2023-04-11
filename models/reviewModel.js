const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("review", reviewSchema);
