const orderModel = require("../models/orderModel");

// add order
const post_order = async (req, res) => {
  const newOrder = new orderModel({
    user: req.body.user,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    car: req.body.car,
  });

  try {
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

//  my order
const my_order = async (req, res) => {
  try {
    const order = await orderModel.find({ email: req.params.email });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete data from my order
const delete_order = async (req, res) => {
  try {
    const order = await orderModel.deleteOne({ _id: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get cars
const get_orders = async (req, res) => {
  let orders = await orderModel.find({});
  try {
    res.json(orders);
  } catch (error) {
    res.status(500).json(err);
  }
};

// status update
const update_status = async (req, res) => {
  try {
    const order = await orderModel.updateOne({ status: req.body.status });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  post_order,
  my_order,
  delete_order,
  get_orders,
  update_status,
};
