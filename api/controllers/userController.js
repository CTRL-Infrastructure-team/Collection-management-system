const { UserModel } = require("../models/user");

const createUser = (req, res) => {
  let user = new UserModel({});
  user.name = req.body.name;
  user.mail = req.body.mail;
  // user.name = 'taro';
  // user.mail = 'aa@example.com';

  user.save(() => {
    res.send(200);
  });
};

const getUsers = (req, res) => {
  UserModel.findById(req.params.id)
    .then((result) => {
      res.send(result);
    });
};

module.exports = {
  createUser,
  getUsers
};