require('dotenv').config();
const express = require('express');
const path = require('path');

const server = express();

const { PORT } = process.env;

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

server.get('/heartbeat', (req, res) => {
  res.send('Hello!! I am heartbeat channel!');
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});