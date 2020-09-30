const User = require("../models/user");

const createUser = (req, res) => {
  user.name = req.body.name;
  user.mail = req.body.mail;
  // user.name = 'taro';
  // user.mail = 'aa@example.com';

  user.save();
  res.send(200);
};

module.exports = {
  createUser
};