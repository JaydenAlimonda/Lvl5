const mongoose = require('mongoose')
const Schema = mongoose.Schema


const barterSchema = new Schema({
    productName: String,
    description: String,
    inStock:Boolean,
    itemPrice: Number,
  });

module.exports = mongoose.model("booneBarterModel", barterSchema)