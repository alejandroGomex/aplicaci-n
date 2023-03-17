const mongoose = require('mongoose');
const express = require('express');

const routerApi = require('./src/routes');
require('dotenv').config();

const port = 5000 || process.env.PORT;

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connection with mongo'))
  .catch((error) => console.error(error));