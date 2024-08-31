const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Import routes
const carRoutes = require('./routes/car.routes');

// Define routes
app.use('/api', carRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
