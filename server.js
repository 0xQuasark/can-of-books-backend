'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

const app = express();
app.use(cors());

mongoose.connect(MONGODB_URL);


app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', (request, response) => {
  response.send('Books request received')
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
