var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
const async = require("async")
var checkAuth = require("./../middleware/checkAuth.js")

router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка яблок</h1>');
});
router.get("/:nick", checkAuth, function(req, res, next) {
db.query(`SELECT * FROM apples WHERE apples.nick = '${req.params.nick}'`, (err, apples) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(apples.length == 0) return next(new Error("Нет такого яблока"))
var apple = apples[0];
res.render('apple', {
title: apple.title,
picture: apple.avatar,
desc: apple.about
})
}
})
});
module.exports = router;
