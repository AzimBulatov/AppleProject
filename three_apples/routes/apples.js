const express = require('express');
const router = express.Router();
const Apple = require("../models/apple").Apple;
const async = require("async")

router.get('/:nick', async function(req, res, next) {
  try {
    const [apple, apples] = await Promise.all([
      Apple.findOne({ nick: req.params.nick }),
      Apple.find({}, { _id: 0, title: 1, nick: 1 })
    ]);
  
    if (!apple) {
      throw new Error("Нет такого");
    }
    
    renderApple(res, apple.title, apple.avatar, apple.desc, apples);
  } catch (err) {
    next(err);
  }
});

function renderApple(res, title, picture, desc, apples) {
  console.log(apples);

  res.render('apple', {
    title: title,
    picture: picture,
    desc: desc,
    menu: apples
  });
}

module.exports = router;