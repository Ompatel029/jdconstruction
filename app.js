const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Routes
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');

// MongoDB connect
mongoose.connect('mongodb://127.0.0.1:27017/jd_contact', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB error:', err.message);
});

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', homeRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
  console.log(`🚀 JD Constructions server at http://localhost:${port}`);
});
