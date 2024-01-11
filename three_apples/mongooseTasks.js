const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test1');

const Apple = require("./models/apple").Apple;

const apple = new Apple({
  title: "Красно-желтое яблоко",
  nick: "Honeycrisp"
});

console.log(apple);

apple.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });