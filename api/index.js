const express = require('express');
const app = express();
const mongoose = require('mongoose');
// パス指定用モジュール
const path = require('path');
const {
  createUser } = require("./controllers/userController");
const bookController = require("./controllers/bookController"); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// multipart/form-data
// application/json

mongoose.connect(
  'mongodb://localhost:27017/collectionManagement',
  { useNewUrlParser: true }
);

app.post("/user", createUser);
app.post("/books", bookController.createBook);
app.get("/books", bookController.getBooks);

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log('Running at Port 8080...');
});

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});

module.exports = {
  path:"/api/v1/",
  handler: app
}