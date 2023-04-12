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
  let cars = await carModel.find({});
  try {
    res.json(cars);
  } catch (error) {
    res.status(500).json(err);
  }
};

// get car
const get_car = async (req, res) => {
  try {
    const car = await carModel.find({ _id: req.params.id });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
};

//  delete car
const delete_car = async (req, res) => {
  try {
    const car = await carModel.deleteOne({ _id: req.params.id });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  post_car,
  get_car,
  get_cars,
  delete_car,
};
