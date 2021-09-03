// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!';
const wash = () => 'Bora tomar banho!!';
const sleep = () => 'Partiu Dormir!!';

const doingThings = (callback) => console.log(callback());
doingThings(wakeUp);
doingThings(wash);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!