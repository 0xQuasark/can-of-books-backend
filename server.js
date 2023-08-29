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
app.use(express.json());
mongoose.connect(MONGODB_URL);


app.get('/books', async (req, res) => {
  try {
    let documents = await BookModel.find({});
    res.json(documents);
  } catch (e) {
    console.log('Something went wrong when finding all the books: ', e);
    res.status(500).send(e);
  }
});

app.post('/books', async(req, res, next) => {
  let { title, description, status, author } = req.body;

  if (!title || !description || !status) {
    res.status(400).send('Please submit all information in a JSON query.')
  }

  try {
    let newBook = new BookModel({ title, description, status, author });
    let document = await newBook.save();
    console.log('New Book Created, ', document);
    res.json(document);
  } catch (err){
    res.status(500).send(err);
  }
});

app.delete('/books/:bookID', async (req, res) => {
  let bookId = req.params.bookID;
  if (!bookId) {
    res.status(404).send('Please provide a valid Book Id');
    return;
  }
  console.log('deleting book of id: ' + bookId);
  try {
    let result = await BookModel.findByIdAndDelete(bookId);

    if (!result) {
      res.status(404).send('Book ID not found.');
      return;
    }
    console.log('Successfully deleted book with id: ' + bookId);
    res.status(202).send('Successfully deleted book.');

  } catch (err) {
    if (err.name === 'CastError') {
      res.status(400).send('Invalid book ID format');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});


app.listen(PORT, () => console.log(`app v2.0 listening on ${PORT}`));
