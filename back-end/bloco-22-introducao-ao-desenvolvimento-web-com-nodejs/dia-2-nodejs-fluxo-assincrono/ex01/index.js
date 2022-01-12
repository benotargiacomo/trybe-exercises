const doMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof(a) !== 'number') reject('Informe apenas números');
    if (typeof(b) !== 'number') reject('Informe apenas números');
    if (typeof(c) !== 'number') reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) reject('Valor muito baixo');

    resolve(result);
  })
}

doMath(1, 1, 'texto')
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(5, 6, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))