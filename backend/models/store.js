const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const store = mongoose.model("store", storeSchema);
module.exports = store;