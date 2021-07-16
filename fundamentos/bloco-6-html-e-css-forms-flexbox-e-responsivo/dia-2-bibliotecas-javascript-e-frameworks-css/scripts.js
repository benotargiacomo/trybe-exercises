const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const estadoSelect = document.getElementById('estado-input');
const submitButton = document.querySelector('#submit');

for (let i = 0; i < estados.length; i += 1) {
  let options = document.createElement('option');
  options.innerText = estados[i];
  options.value = estados[i];
  estadoSelect.append(options);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
})

window.onload = function() {
  // document.getElementById('data-input').DatePickerX.init();
  new window.JustValidate('.js-form', {
    rules: {
      nome: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      endereco: {
        required: true,
        maxLength: 200
      },
      cidade: {
        required: true,
        maxLength: 28
      },
      estado: {
        required: true
      },
      imovel: {
        required: true
      },
      curriculo: {
        required: true,
        maxLength: 1000
      },
      cargo: {
        required: true,
        maxLength: 40
      },
      data: {
        required: true
      }
    },
    messages: {
      nome: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido.',
        maxLength: 'O limite é de 50 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      endereco: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      cidade: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      estado: {
        required: 'O campo estado é obrigatório.',
      },
      imovel: {
        required: 'A escolha de um item é obrigatória.',
      },
      curriculo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      cargo: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      data: {
        required: 'Este campo é obrigatório.',
      }
    },
  });
}