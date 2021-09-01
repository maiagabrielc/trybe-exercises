const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const passing = [1, 2, 3, 4];
const expected = [1, 2, 3, 4];

// console.log(myRemoveWithoutCopy(passing, 3));
// assert.notDeepStrictEqual([1, 2, 3, 4], myRemoveWithoutCopy(passing, 3));
console.log(passing);
assert.deepStrictEqual(expected, myRemoveWithoutCopy(passing, 5));