const express = require('express');
const app = express();
const userRouter = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(3000, () => {
  console.log('Ouvindo');
});