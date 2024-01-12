var express = require('express')
var router = express.Router()
var Apple = require("../models/apple").Apple
/* GET home page. */


router.get('/', async (req, res, next) => {
  try {
      const menu = await Apple.find({}, { _id: 0, title: 1, nick: 1 }).exec();
      req.session.greeting = 'Hi!!!'
      res.render('index', { 
        title: 'Express',
        menu: menu  
      });
 } catch (err) {
next(err);
}
});

module.exports = router;
