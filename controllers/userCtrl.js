const userModel = require("../models/userModel");

// post user
const post_user = async (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// make admin
const make_admin = async (req, res) => {
  const user = await userModel.find({ email: req.body.email });
  if (user) {
    await userModel.updateOne(user, {
      $set: { isAdmin: true },
    });
  }
};

// check admin or not
const check_admin = async (req, res) => {
  const check = userModel.find({ email: req.params.email });
  try {
    res.status(200).json(check);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  post_user,
  make_admin,
  check_admin,
};
