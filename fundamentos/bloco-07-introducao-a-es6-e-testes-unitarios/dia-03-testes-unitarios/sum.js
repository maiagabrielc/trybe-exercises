const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// console.log(sum(4, 5));
console.log(sum(0, 0));
// console.log(sum(4, '5'));