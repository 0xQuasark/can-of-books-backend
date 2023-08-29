'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
    default: 'John Doe'
  }
});

const BookModel = mongoose.model('books', bookSchema);

module.exports = BookModel;