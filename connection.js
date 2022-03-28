const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(``, () => {
  console.log("Connected to MongoDB")
})