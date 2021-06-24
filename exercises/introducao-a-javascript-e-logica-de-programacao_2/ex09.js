let array25 = [];
let divisaoPorDois = [];

for(let index = 0; index <= 25; index += 1){
  array25.push(index);
}

for(let index = 0; index < array25.length; index += 1){
  divisaoPorDois.push(array25[index] / 2);
}

console.log(divisaoPorDois);