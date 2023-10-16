require('express-async-errors');

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT;

const routes = require('./routes/routes');
const db = require('./database/database');
const rateLimit = require('./middleware/rateLimit');
const globalError = require('./middleware/globalError');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimit);

app.use('/', routes);
app.use('*', (req, res) => {
  res.status(404).send('Invalid Url!');
});
app.use(globalError);

app.listen(port, () => {
  db.connect();
});
