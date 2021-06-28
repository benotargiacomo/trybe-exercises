let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// // Parte 1
// console.log('Bem-vinda, ' + info.personagem);


// // Parte 2
info.recorrente = 'Sim';
// console.log(info);

// // Parte 3
// for (let index in info){
//   console.log(index);
// }

// // Parte 4
// for (let index in info) {
//   console.log(info[index]);
// }

// Parte 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let index in info){
  if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim'){
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  }
}
