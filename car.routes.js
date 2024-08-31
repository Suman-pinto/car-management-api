const express = require('express');
const router = express.Router();
const Car = require('../models/car.model');

// Add a new car
router.post('/cars', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all cars
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).send(cars);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Search cars based on features
router.get('/cars/search', async (req, res) => {
  try {
    const query = req.query;
    const cars = await Car.find(query);
    res.status(200).send(cars);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a car
router.delete('/cars/:id', async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).send();
    }
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
