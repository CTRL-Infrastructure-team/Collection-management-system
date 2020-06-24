const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  mail: String,
  rentbooks: [{ title: String, date: Date }],
  history: [{ title: String, date: Date }],
  reserve: [{title: String}]
});

var UserModel = mongoose.model('user', UserSchema);
