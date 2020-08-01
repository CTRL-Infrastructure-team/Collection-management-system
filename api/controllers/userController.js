const User = require("../models/user");
const user = require("../models/user");

const createUser = (req, res) => {
  user.name = req.body.name;
  user.mail = req.body.mail;
  // user.name = 'taro';
  // user.mail = 'aa@example.com';

  user.save();
  res.send(200);
};

const getUsers = (req, res) => {
  user.find({})
    .then((result) => {
      res.send(result);
    });
};

module.exports = {
  createUser,
  getUsers
};