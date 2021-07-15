const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const estadoSelect = document.getElementById('estado-input');

for (let i = 0; i < estados.length; i += 1) {
  let options = document.createElement('option');
  options.innerText = estados[i];
  options.value = estados[i];
  estadoSelect.append(options);
}


// function getUserValue(event) {
//   event.preventDefault();
// }