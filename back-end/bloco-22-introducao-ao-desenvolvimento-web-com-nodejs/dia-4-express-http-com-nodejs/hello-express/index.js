const express = require('express');

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na port 3001');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá Mundo!');
}
