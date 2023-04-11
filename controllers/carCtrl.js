const carModel = require("../models/carModel");

// add car
const post_car = async (req, res) => {
  const newCar = new carModel({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
  });

  try {
    const saveCar = await newCar.save();
    res.status(201).json(saveCar);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get cars
const get_cars = async (req, res) => {
  let data = await carModel.find({});
  try {
    res.json(data);
  } catch (error) {
    res.status(500).json(err);
  }
};

// get car
const get_car = async (req, res) => {
  try {
    const product = await carModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  post_car,
  get_car,
  get_cars,
};
