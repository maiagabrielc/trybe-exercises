const input = require('readline-sync');

const distanceUser = input.questionInt('Qual a distância em Metros? ');
const timeUser = input.questionInt('Qual o tempo em Segundos? ')

const speedCalc = (distance, time) => {
  return `A velocidade do veículo é de: ${distance / time}m/s`;
};

console.log(speedCalc(distanceUser, timeUser));