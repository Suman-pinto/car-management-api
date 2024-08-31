const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  speed: Number,
  price: Number,
  fuelType: String,
  transmission: String,
  mileage: Number,
  registrationNumber: String,
  ownerName: String
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
