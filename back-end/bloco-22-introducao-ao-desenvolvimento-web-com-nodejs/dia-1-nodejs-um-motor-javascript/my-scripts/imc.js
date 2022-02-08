const input = require('readline-sync');

const weightUser = input.questionFloat('Qual o seu Peso em kilos? ');
const heightUser = input.questionFloat('Qual a sua Altura em metros? ');

const imc = (weight, height) => {
  const result = (weight / height ** 2).toFixed(2);
  let message = '';

  const IMC_TABLE = [
    'Abaixo do peso (magreza)',
    'Peso normal',
    'Acima do peso (sobrepeso)',
    'Obesidade grau I',
    'Obesidade grau II',
    'Obesidade graus III e IV'
  ];

  if(result < 18.5){
      message = IMC_TABLE[0]
  } else if(18.5 <= result && result < 25){
      message = IMC_TABLE[1]
  } else if( 25 <= result && result < 30){
      message = IMC_TABLE[2]
  } else if( 35 <= result && result < 40){
      message = IMC_TABLE[3]
  } else if(40 <= result){
      message = IMC_TABLE[4]
  }

  return `O imc é: ${result}, você está ${message}`;
};

console.log(imc(weightUser, heightUser));