const Book = require("../models/book");
const { UserModel } = require("../models/user");
const user = require("../models/user");

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

// /api/v1/books/:bookId/rent
// application/json
// { id: "8ru89nc7ru93cr" }

const rentBook = (req, res) => {
  Book.findById(req.params.bookId)
    .then(result => {
      if(!result.rent) {
        UserModel.findByIdAndUpdate(
          req, body.id, 
          rentbooks, [{ title: result.title, date: Date.now() }]
        )
          .then(result => {
            // +Book側変更も行う
            res.send(result); 
          });
        Book.rent = 'taro';
        Book.save(result)
          .then((result) => {
            res.send(result);
          });
      }
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