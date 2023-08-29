'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const BookModel = require('./BookModel.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const sciFiBooks = [
  { title: 'Dune', description: 'Set in the distant future, the story follows Paul Atreides, whose family assumes control of the desert planet Arrakis. Known for its spice melange, the planet is the key to interstellar travel and control. The novel explores themes of politics, religion, and ecology.', author: 'Frank Herbert', status: 'unread' },
  { title: 'Neuromancer', description: 'The story unfolds in a dystopian future, focusing on a washed-up computer hacker named Case. Hired by a mysterious employer, Case is set on a heist against a powerful artificial intelligence. The novel is credited with pioneering the cyberpunk genre.', author: 'William Gibson', status: 'unread' },
  { title: 'Foundation', description: 'The book centers around the efforts of mathematician Hari Seldon to preserve knowledge for the future. As the Galactic Empire crumbles, Seldon creates a group called the Foundation to minimize the period of chaos to follow. The novel deals with themes of history, sociology, and the future of humanity.', author: 'Isaac Asimov', status: 'unread' },
  { title: 'Ender\'s Game', description: 'The novel features a future where Earth is threatened by an alien race. Young Ender Wiggin is recruited into a military training program designed to create leaders capable of defending Earth. The book explores themes of morality, leadership, and the complexities of war.', author: 'Orson Scott Card', status: 'unread' },
  { title: 'Hyperion', description: 'Set in a future universe, the story is told through the perspectives of seven pilgrims sharing their tales. These stories form a complex narrative that explores the world of Hyperion and its significance. Themes of love, sacrifice, and the human condition are abundant.', author: 'Dan Simmons', status: 'unread' },
  { title: 'Snow Crash', description: 'The story is set in a future America, fragmented into corporate city-states. It follows Hiro Protagonist as he investigates Snow Crash, a new drug that affects both the human mind and computer programs. It explores the convergence of the digital and physical worlds.', author: 'Neal Stephenson', status: 'unread' },
  { title: 'Starship Troopers', description: 'The story takes place in the future, in a world where war has become a constant. It follows Johnny Rico as he joins the Mobile Infantry and goes off to fight against alien species. Themes of civic duty, military service, and the ethics of war are central.', author: 'Robert A. Heinlein', status: 'unread' },
  { title: 'The Left Hand of Darkness', description: 'The story unfolds on the planet Gethen, where a human emissary is sent to convince the locals to join an interstellar collective. Gethenians are unique in that they can choose and change their gender. The novel delves into themes of gender, society, and friendship.', author: 'Ursula K. Le Guin', status: 'unread' },
  { title: 'Brave New World', description: 'Set in a future society driven by technological advancements, the story presents a world where humans are bred in hatcheries. Society is divided into castes, and individuality is suppressed for the sake of stability. It explores the consequences of sacrificing freedom for comfort.', author: 'Aldous Huxley', status: 'unread' },
  { title: 'The Hitchhiker\'s Guide to the Galaxy', description: 'Starting with the demolition of Earth to make way for a hyperspace bypass, the story follows Arthur Dent and Ford Prefect as they journey through space. Guided by a manual called "The Hitchhiker’s Guide to the Galaxy," they explore themes of absurdity and the human condition.', author: 'Douglas Adams', status: 'unread' }
];

const bookPromises = sciFiBooks.map(book => {
  const bookModel = new BookModel(book);
  return bookModel.save();
});

Promise.all(bookPromises)
  .then(documents => {
    console.log('Books saved:', documents);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });



// 'use strict';

// require('dotenv').config();
// const mongoose = require('mongoose');
// const BookModel = require('./BookModel.js');
// const MONGODB_URL = process.env.MONGODB_URL;

// mongoose.connect(MONGODB_URL);

// const book1 = new BookModel({
//   title: 'To Kill a Mockingbird',
//   description: 'A classic novel by Harper Lee',
//   status: 'unread'
// });

// const book2 = new BookModel({
//   title: '1984',
//   description: 'A dystopian novel by George Orwell',
//   status: 'unread'
// });

// const book3 = new BookModel({
//   title: 'Pride and Prejudice',
//   description: 'A romantic novel by Jane Austen',
//   status: 'unread'
// });

// Promise.all([
//   book1.save(),
//   book2.save(),
//   book3.save()
// ]).then(documents => {
//   console.log(documents);
// });
