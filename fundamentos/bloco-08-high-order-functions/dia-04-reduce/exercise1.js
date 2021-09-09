const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const flat = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return flat;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);