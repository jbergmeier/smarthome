const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 1337;
//app.use(express.static('dist'));

const app = express();
app.use(cors());

// +++++ Routes +++++
// show client view
app.get('/', (req, res) => {
  res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
  //res.sendFile('dist/index.html');
});

// control
app.post('/control', (req, res) => {
  res.json({
    message: 'Hello',
  });
});

app.listen(port, async () => {
  console.log(`Server is running on Port: ${port}`);
});
