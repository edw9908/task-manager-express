const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

const api = require('./api/index');
const connectDB = require('./db/connect');

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', api);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
