const mongoose = require('mongoose');
const Schema=mongoose.Schema

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type:Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'Pending',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

order= mongoose.model('Order', orderSchema);
module.exports=order;
