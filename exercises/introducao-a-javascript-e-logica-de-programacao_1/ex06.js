let nome = "Peão";

switch (nome.toLowerCase()){
  case 'peão':
    console.log('Peão -> Movimente-se uma casa para frente');
    break;
  case 'cavalo':
    console.log('Cavalo -> Movimente-se em forma de L');
    break;
  case 'bispo':
    console.log('Bispo -> Movimente-se na diagonal');
    break;
  case 'torre':
    console.log('Torre -> Movimente-se em linhas retas');
    break;
  case 'rainha':
    console.log('Rainha -> Movimente-se em linhas retas ou diagonal');
    break;
  case 'rei':
    console.log('Rei -> Mova-se uma casa em qualquer direção');
    break;
  default:
    console.log('Peça desconhecida!');
    break;
}