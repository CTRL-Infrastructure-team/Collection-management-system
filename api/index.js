const express = require('express');
const app = express();
var mongoose = require('mongoose');
// パス指定用モジュール
const path = require('path');


mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true });
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: String,
  mail: String,
  rentbooks: [{ title: String, date: Date }],
  history: [{ title: String, date: Date }],
  reserve: [{title: String}]
})
var UserModel = mongoose.model('users', UserSchema);
var user = new UserModel();
user.name = 'taro';
user.mail = 'aa@example.com';
user.save();

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log('Running at Port 8080...');
});

app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});