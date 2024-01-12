const express = require('express');
const router = express.Router();
const Apple = require("../models/apple").Apple;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Apple.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Express',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
