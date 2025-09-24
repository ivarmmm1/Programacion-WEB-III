const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa resuelta despues de 3 segundos");
  }, 3000);
});

miPromesa.then(mensaje => {
  console.log(mensaje);
});
