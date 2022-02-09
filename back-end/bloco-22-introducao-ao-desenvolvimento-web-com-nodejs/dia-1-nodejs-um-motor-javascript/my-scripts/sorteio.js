const input = require('readline-sync');

let game = true;

while (game) {
  const numberUser = input.questionInt('Qual número você escolhe para o sorteio? De 0 a 10 ');

  const lottery = (numberChoice) => {
    const numberPrize = Math.floor(Math.random() * 11);

    let message = '';

    if(numberChoice === numberPrize) {
      message = 'Parabéns, número correto!'
    } else {
      message = `Opa, não foi dessa vez. O número era ${numberPrize}`;
    }

    return message;
  };

  console.log(lottery(numberUser));

  const continueGame = input.question('Você que jogar de novo? (S)im (N)ão').toLowerCase();
  if (continueGame === 'n') {
    game = false;
  }
}