const express = require('express');
const App = express();
const PORT = 3000;

App.get('/', function (req, res) {
  res.send('Home page');
});

App.listen(PORT, () => {
  console.log('app is running at ${PORT}');
});
