// Load environment variables from .env file
require('dotenv').config();

// Import other dependencies
const express = require('express');

// Import database connection
const sequelize = require('./config/databse');

const {
    User,
    Role,
    Policy,
    Task,
    Subtask,
    TaskStatus,
    DateType,
    Notification,
  } = require('./models/index');


// Set up Express app
const app = express();

// Set up routes, middleware, etc.

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server is listening on port' + process.env.PORT);
});