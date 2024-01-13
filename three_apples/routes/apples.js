const express = require('express');
const router = express.Router();
const Apple = require("../models/apple").Apple;
var checkAuth = require("./../middleware/checkAuth.js")
/* GET users listing. */
router.get('/', (req, res) => {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с apples');
});

/* Страница чая */
router.get('/:nick',checkAuth, async (req, res, next) => {
    try {
        const [apple, apples] = await Promise.all([
            Apple.findOne({ nick: req.params.nick }).exec(),
            Apple.find({}, { _id: 0, title: 1, nick: 1 }).exec()
        ]);

        if (!apple) throw new Error("Нет такого чая");

        res.render('apple', {
            title: apple.title,
            picture: apple.avatar,
            desc: apple.desc,
            menu: apples || []
        });
    } catch (err) {
         next(err);
    }
});

module.exports = router;