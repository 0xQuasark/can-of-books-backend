'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const BookModel = require('./BookModel.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const book1 = new BookModel({
  title: 'To Kill a Mockingbird',
  description: 'A classic novel by Harper Lee',
  status: 'unread'
});

const book2 = new BookModel({
  title: '1984',
  description: 'A dystopian novel by George Orwell',
  status: 'unread'
});

const book3 = new BookModel({
  title: 'Pride and Prejudice',
  description: 'A romantic novel by Jane Austen',
  status: 'unread'
});

Promise.all([
  book1.save(),
  book2.save(),
  book3.save()
]).then(documents => {
  console.log(documents);
});
