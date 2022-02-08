const input = require('readline-sync');

const weightUser = input.questionFloat('Qual o seu Peso em kilos? ');
const heightUser = input.questionFloat('Qual a sua Altura em metros? ');

const imc = (weight, height) => {
  const result = (weight / height ** 2).toFixed(2);

  return `O imc é: ${result}`;
};

console.log(imc(weightUser, heightUser));