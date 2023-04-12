const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  car: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
