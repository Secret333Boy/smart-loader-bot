require('dotenv').config();
require('./bot.js');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'client')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
app.get('*', (req, res) => {
  res.status(404).send();
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
