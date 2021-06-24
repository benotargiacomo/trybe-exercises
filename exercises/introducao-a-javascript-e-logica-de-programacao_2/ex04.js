let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaDosNumeros = 0;

for (index = 0; index < numbers.length; index += 1){
  somaDosNumeros = somaDosNumeros + numbers[index];
}

let mediaAritmetica = somaDosNumeros/numbers.length;

if (mediaAritmetica > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}