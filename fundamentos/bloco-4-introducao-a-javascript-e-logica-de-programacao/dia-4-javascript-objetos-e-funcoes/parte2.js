// Exercício 1
function vPalindromo(textoInicial) {
  let textoInvertido = "";
  for (let index = textoInicial.length - 1; index >= 0; index-= 1) {
    textoInvertido += textoInicial[index];
  }
  if (textoInicial === textoInvertido){
    return true;
  } else {
    return false;
  }
}

console.log(vPalindromo('arara'));