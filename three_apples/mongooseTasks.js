const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
  
const AppleSchema = new mongoose.Schema( {name: String} );
AppleSchema.methods.brew = function() {
console.log(this.name + ' издает хруст');
}
const Apple = mongoose.model('Apple', AppleSchema);
const welding = new Apple({ name: 'Семиренка' });
  
welding.save()
  .then(() => welding.brew())
  .catch((err) => console.log(err))