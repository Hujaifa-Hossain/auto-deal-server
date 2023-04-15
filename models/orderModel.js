const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  car: {
    type: String,
    required: true,
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
  status: {
    type: String,
    required: true,
    default: 'pending',
  },
});

module.exports = mongoose.model("Order", orderSchema);
