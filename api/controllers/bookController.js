const Book = require("../models/book");

const createBook = (req, res) => {
  let newBook = new Book({
    name:"vue入門",
    author:"ポリエステル",
    language:"Javascript",
    tags:[{title:"フロントエンド"}]
  });
  // newBook.name = req.body.newBook;
  // newBook.author = req.body.author;
  // newBook.language = req.body.language;
  // newBook.tags = req.body.tags;
  // newBook.name = "vue入門";
  // newBook.author = "ポリエステル";
  // newBook.language = "Javascript";
  // newBook.tags = [{title:"フロントエンド"}];
  newBook.save((result) => {
    res.send(200);
  });
};

const getBooks = (req, res) => {
  Book.find({})
    .then((result) => {
      res.send(result);
    });
};

module.exports = {
  createBook,
  getBooks
};