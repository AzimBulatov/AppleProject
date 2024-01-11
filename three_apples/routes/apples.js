var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с apples');
});

router.get('/Rapple', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/Yapple', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/Gapple', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });    
module.exports = router;