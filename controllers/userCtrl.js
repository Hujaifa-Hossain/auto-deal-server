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
  const filter = { email: req.body.email };
  const result = await userModel.find(filter).toArray();
  if (result) {
    const documents = await userModel.updateOne(filter, {
      $set: { role: "admin" },
    });
  }
};

// check admin or not
const check_admin = async (req, res) => {
  const result = await userModel.find({ email: req.params.email }).toArray();
  console.log(result);
  res.send(result);
};

module.exports = {
  post_user,
  make_admin,
  check_admin,
};
