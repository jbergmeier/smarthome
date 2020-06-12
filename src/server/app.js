const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 1337;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, async () => {
  console.log(`Server is running on Port: ${port}`);
});
