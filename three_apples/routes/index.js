var express = require('express');
var router = express.Router();

//* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });
  
router.get('/Rapple', function(req, res, next) {
res.render('apple', {
title: "Красное яблоко",
picture: "images/red_apple.jpg",
desc: "Я не знаю что можно сказать про красное яблоко. Оно как бы есть, оно как бы вкусное, ну и в общем то все."
});
});
  
router.get('/Yapple', function(req, res, next) {
res.render('apple', {
title: "Желтое яблоко",
picture: "images/yellow_apple.jpg",
desc: "Пожалуй самое сладкое яблоко из всех что я пробовал. Но моим любимым яблоком остается красное"
});
});

router.get('/Gapple', function(req, res, next) {
res.render('apple', {
title: "Зеленое яблоко",
picture: "images/green_apple.jpg",
desc: "Зеленое яблоко самое кислое из всех. Я бы съел его наверное только при условии, что мне бы мне заплатили за это."
});
});

module.exports = router;
