const express = require('express');

const productRouter = require('./controllers/productController');
const PORT = 3000;
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
