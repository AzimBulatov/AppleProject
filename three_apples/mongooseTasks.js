const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Apple = mongoose.model('Apple', { name: String });
const welding = new Apple({ name: 'Семиренка' });

welding.save()
  .then(() => console.log('Хруст'))
  .catch((err) => console.log(err));