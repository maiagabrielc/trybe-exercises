const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;

app.use(bodyParser.json());

const recipes = [];

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: 'Invalid Token' });

  res.status(200).json({ message: 'Valid Token!' });
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});
