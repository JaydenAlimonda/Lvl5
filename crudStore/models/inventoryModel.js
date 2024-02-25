const mongoose = require('mongoose')
const Schema = mongoose.Schema


const inventorySchema = new Schema({
    productName: String,
    description: String,
    inStock:Boolean,
    itemPrice: Number,
  });

module.exports = mongoose.model("inventoryModel", inventorySchema)