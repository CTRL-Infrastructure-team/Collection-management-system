const Book = require("../models/book");

const createBook = (req, res) => {
  book.name = req.body.book;
  book.author = req.body.author;
  book.language = req.body.language;
  book.tags = req.body.tags;
  book.save();
  book.send(200);
};

export {
  createBook
}