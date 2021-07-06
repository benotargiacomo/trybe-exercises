// Exercício 1
// function vPalindromo(textoInicial) {
//   let textoInvertido = "";
//   for (let index = textoInicial.length - 1; index >= 0; index-= 1) {
//     textoInvertido += textoInicial[index];
//   }
//   if (textoInicial === textoInvertido){
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(vPalindromo('arara'));


//Exercício 2
// let arrayTest = [2, 3, 6, 7, 10, 1];

// function maiorNumero(array) {
//   let numeroInicial = 0;
//   for (let index = 0; index < array.length; index += 1){
//     if (array[index] > numeroInicial) {
//       numeroInicial = array[index]
//     }
//   }
//   return numeroInicial
// }

// console.log(maiorNumero(arrayTest));

//Exercício 3
// let arrayTest = [2, 4, 6, 7, 10, 0, -3];

// function menorNumero(array) {
//   let numeroInicial = array[0];
//   for (let index in array) {
//     if(array[index] < numeroInicial) {
//       numeroInicial = array[index];
//     } 
//   }
//   return numeroInicial;
// }

// console.log(menorNumero(arrayTest));

// Exercício 4
// let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorPalavra(array){
//   let palavraInicial = "";
//   for (let index in array) {
//     if (array[index].length > palavraInicial.length) {
//       palavraInicial = array[index];
//     }
//   }
//   return palavraInicial;
// }

// console.log(maiorPalavra(arrayTest));

//Exercício 5