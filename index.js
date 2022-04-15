const express = require('express');
const App = express();
const PORT = 3000;

App.get('/about', function (req, res) {
  res.send('About page');
});

App.listen(PORT, () => {
  console.log('app is running at ${PORT}');
});
