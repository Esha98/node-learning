const express = require('express');
const App = express();
const PORT = 3000;

const customMiddleware = (req, res, next) => {
  console.log('Middleware calling');
  next();
};

App.use(customMiddleware);

App.get('/', function (req, res) {
  res.send('About page');
});

App.listen(PORT, () => {
  console.log('app is running at', PORT);
});
