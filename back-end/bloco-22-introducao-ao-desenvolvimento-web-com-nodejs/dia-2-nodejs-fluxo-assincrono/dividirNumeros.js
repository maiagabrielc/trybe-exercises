function dividirNumeros(num1, num2) {
  if (num2 === 0) throw new Error('Não pode ser feita uma divisão por zero!');

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 0);
  console.log(`resultado: ${resultado}`);
} catch (err) {
  console.error(`resultado: ${err.message}`);
}