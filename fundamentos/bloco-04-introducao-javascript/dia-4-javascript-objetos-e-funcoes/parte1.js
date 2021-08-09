const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

const info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (info[key] !== 'Sim' && info2[key] !== 'Sim') {
    console.log(`${info[key]} e ${info2[key]}`);
  }
  // console.log(`${info[key]} e ${info2[key]}`);
  if (info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  }
}

// console.log(`Bem-vinda, ${info.personagem}`);
// console.log(info);
// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }