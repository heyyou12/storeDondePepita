const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: String,
    price: String,
    code: String,
    description: String,
    date: {type: Date, default: Date.now},
    dbStatus: Boolean,


});

const product = mongoose.model("producto", productSchema);
module.exports = product;

