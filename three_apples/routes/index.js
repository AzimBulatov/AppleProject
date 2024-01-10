var express = require('express');
var router = express.Router();

//* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });
  
router.get('/Rapple', function(req, res, next) {
  res.send("<h1>Страница красного яблока </h1>")
});
  
router.get('/Yapple', function(req, res, next) {
  res.send("<h1>Страница желтого яблока </h1>")
});

router.get('/Gapple', function(req, res, next) {
    res.send("<h1>Страница зеленого яблока </h1>")
});

module.exports = router;
