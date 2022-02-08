const weightUser = 70.5;
const heightUser = 1.65;

const imc = (weight, height) => {
  const result = (weight / height ** 2).toFixed(2);

  return `O imc é: ${result}`;
};

console.log(imc(weightUser, heightUser));