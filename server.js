'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BookModel = require('./BookModel.js');

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;

const app = express();
app.use(cors());
// console.log(typeof(MONGODB_URL));
mongoose.connect(MONGODB_URL);


app.get('/test', (request, response) => {
  response.send('test request received')
})

app.get('/books', async (req, res) => {
  // console.log('books route established');
  try {
    let documents = await BookModel.find({});
    res.json(documents);
  } catch (e) {
    console.log('Something went wrong when finding all the books: ', e);
    res.status(500).send(e);
  }
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
