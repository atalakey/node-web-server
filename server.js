const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
