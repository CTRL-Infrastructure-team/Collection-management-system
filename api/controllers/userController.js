const User = require("../models/user");

const createUser = (req, res) => {
  // user.name = 'taro';
  user.name = req.body.name;
  // user.mail = 'aa@example.com';
  user.mail = req.body.mail;
  user.save();
  res.send(200);
};

export {
  createUser
}