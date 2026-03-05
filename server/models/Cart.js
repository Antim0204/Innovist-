// models/Cart.js
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: { type: Number, default: 1 },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);