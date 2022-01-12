require('dotenv').config();
require('./bot.js');
const express = require('express');

const app = express();
app.use(express.json());
app.get('*', (req, res) => {
  res.status(404).send();
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
