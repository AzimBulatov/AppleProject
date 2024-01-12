const express = require('express');
const router = express.Router();
const Apple = require("../models/apple").Apple;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с apple');
});

router.get("/:nick", async (req, res, next) => {
    try {
      const apple = await Apple.findOne({ nick: req.params.nick });
      console.log(apple);
      if (!apple) {
        throw new Error("Нет такого яблока");
      }
      res.render('apple', {
        title: apple.title,
        picture: apple.avatar,
        desc: apple.desc
      });
    } catch (err) {
      next(err);
    }
  });
       
module.exports = router;