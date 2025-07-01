const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

// Routes
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');

mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log('MongoDB Atlas connected');
  })
  .catch((err) => {
    console.error('MongoDB error:', err.message);
  });

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', homeRouter);
app.use('/contact', contactRouter);

// Custom project route
app.get("/projects/rajkotairport", (req, res) => {
  res.render("projects/rajkotairport");
});

app.listen(port, () => {
  console.log(`JD Constructions server running on http://localhost:${port}`);
});
