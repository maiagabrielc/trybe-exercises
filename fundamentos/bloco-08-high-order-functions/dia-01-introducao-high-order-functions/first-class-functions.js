// const sayHello = () => ('hello trybers');

// const printGreeting = (callback) => {
//     console.log(callback());
// };

// printGreeting(sayHello);

const sumFixAmount = (amount) => (number) => amount + number;

const initialSum = sumFixAmount(15);
console.log(initialSum(5));