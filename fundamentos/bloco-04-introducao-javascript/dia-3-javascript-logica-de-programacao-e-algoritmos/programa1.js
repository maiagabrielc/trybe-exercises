// const n = 5;

// EXERCICIO 5
let n = 3;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col === controlLeft || col === controlRight || line === middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// EXERCICIO 4(FORMA ELEGANTE)
// for (let i = 1; i <= n; i += 1) {
//   let str = ' '.repeat(n - i);
//   let str2 = '*'.repeat(i * 2 - 1);
//   console.log(str + str2 + str);
// }

// for (let index = 1; index <= 2; index += 2) {
//   // console.log(Array(n + 1).join('*')); // EXERCICIO 1

//   // console.log('*'.repeat(n)); // EXERCICIO 1

//   // console.log('*'.repeat(index)); // EXERCICIO 2

//   // console.log(' '.repeat(n - index) + '*'.repeat(index)); // EXERCICIO 3

  // console.log(' '.repeat(index + 1) + '*'.repeat(index) + ' '.repeat(index + 1)); // EXERCICIO 4(FORMA DESELEGANTE)
// }

// EXERCICIO 4(FORMA DESELEGANTE)
// for (let index = 4; index < n; index += 1) {
//   console.log(' '.repeat(n - index) + '*'.repeat(n - 2) + ' '.repeat(n - index));
// }

// // EXERCICIO 4(FORMA DESELEGANTE)
// for (let index = 4; index < n; index += 1) {
//   console.log('*'.repeat(n));
// }