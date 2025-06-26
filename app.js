const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const homeRouter = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
