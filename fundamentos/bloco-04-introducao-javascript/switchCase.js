let estadoPessoaAprovada = 'list';

switch (estadoPessoaAprovada) {
  case 'aprovada':
    console.log("Parabéns, você foi aprovado(a)!");
    break;
  case 'lista':
    console.log("Você está na lista de espera");
    break;
  case 'reprovada':
      console.log("Você foi reprovada(o)");
      break;
  default:
    console.log("Você não participou do processo seletivo");
    break;
}