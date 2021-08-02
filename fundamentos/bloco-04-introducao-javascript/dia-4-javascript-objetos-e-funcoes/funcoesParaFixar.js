function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

let operacao = '.';
let a = 4;
let b = 16;

switch (operacao) {
  case '+':
    console.log(soma(a, b));
    break;
  case '-':
    console.log(subtracao(a, b));
    break;
  case '*':
    console.log(mult(a, b));
    break;
  case '/':
    console.log(divisao(a, b));
    break;
  case '%':
    console.log(modulo(a, b));
    break;
  default:
    console.log('Utilize um operador válido');
    break;
}