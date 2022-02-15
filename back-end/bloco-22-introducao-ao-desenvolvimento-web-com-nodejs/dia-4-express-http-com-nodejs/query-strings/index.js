const express = require('express');
const app = express();
const PORT = 3001;

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks/search', function (req, res, _next) {
  const { name } = req.query;
  const filteredDrink = drinks.filter((drink) => {
    const isDrinkName = name
      ? drink.name.toLowerCase().includes(name.toLocaleLowerCase())
      : true;

    return isDrinkName;
  });
  res.status(200).json(filteredDrink);
});

app.get('/drinks/:id', function (req, res, _next) {
  try {
    const { id } = req.params;
    const filteredDrink = drinks.find((drink) => drink.id === Number(id));

    if (!filteredDrink)
      return res.status(404).json({ message: 'Drink Not Found' });

    res.status(200).send(filteredDrink);
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/recipes/search', function (req, res, _next) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipe = recipes.filter((recipe) => {
    const isRecipeName = name ? recipe.name.includes(name) : true;
    const isRecipeMaxPrice = maxPrice
      ? recipe.price < parseInt(maxPrice)
      : true;
    const isRecipeMinPrice = minPrice
      ? recipe.price > parseInt(minPrice)
      : true;

    return isRecipeName && isRecipeMaxPrice && isRecipeMinPrice;
  });
  res.status(200).json(filteredRecipe);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe Not Found' });

  res.status(200).send(recipe);
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});
