const mongoose = require('mongoose');
const Schema=mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  image: String,
});

product= mongoose.model('Product', productSchema);
module.exports=product;
