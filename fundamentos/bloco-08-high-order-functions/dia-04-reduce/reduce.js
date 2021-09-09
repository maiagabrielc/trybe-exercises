// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0;
// // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 113

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const collection = [1, 2, 3, 4, 5];

// const getSum = (accumulator, number) => {
//   console.log(accumulator); // 1 3 6 10
//   return accumulator + number;
// };

// const sumNumbers = collection.reduce(getSum);
// console.log(sumNumbers); // 15

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 100);
// console.log(bigger); // 85

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 8];

// const sum = (acc, number) => ((number % 2 === 0) ? acc + number : acc);

// const sumNumbers = numbers.reduce(sum);
// console.log(sumNumbers);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54, 8];

// const sum = (acc, number) => ((number % 2 === 0) ? acc + number : acc);

// const sumNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(sumNumbers.reduce(sum));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152