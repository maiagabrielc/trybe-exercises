const express = require('express');

const app = express();

// Rota com caminho '/', utilizando o método GET

app.get('/', function (req, res) {
  res.send('hello world');
});

// Rota com caminho '/', utilizando o método POST

app.post('/', function (req, res) {
  res.send('hello world!');
});

// Rota com caminho '/', utilizando o método PUT

app.put('/', function (req, res) {
  res.send('hello world');
});

// Rota com caminho '/', utilizando o método DELETE

app.delete('/', function (req, res) {
  res.send('hello world');
});

// Rota com caminho '/', para qualquer método HTTP

app.all('/', function (req, res) {
  res.send('hello world');
});

// Requisições também podem ser usadas de forma encadeada, para evitar repetir o caminho

app
  .route('/')
  .get(function (req, res) {
    // Requisições para a rota GET '/' são resolvidas aqui
    res.send('hello world get');
  })
  .post(function (req, res) {
    // Requisições para a rota POST '/' são resolvidas aqui
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
// app.get('/hello', handleHelloWorldRequest);

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na port 3001');
// });

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Olá Mundo!');
// }
