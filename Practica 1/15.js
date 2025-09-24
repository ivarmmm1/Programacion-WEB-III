function callbackAPromesa(funcionCallback) {
  return new Promise((resolve, reject) => {
    funcionCallback((error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}

function miCallback(callback) {
  setTimeout(() => callback(null, "Callback convertido a promesa"), 1000);
}
const promesa = callbackAPromesa(miCallback);
promesa.then((resultado) => {
  console.log(resultado);
});
