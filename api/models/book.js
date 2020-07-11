const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  author: String,
  language: String,
  tags: [{ title: String }]
});

// var BookModel = mongoose.model('book', BookSchema);

module.exports = mongoose.model('book', BookSchema);