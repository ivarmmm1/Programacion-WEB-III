function promesaACallback(promesa, callback) {
  promesa
    .then((resultado) => callback(null, resultado))
    .catch((error) => callback(error, null));
}

const miPromesa = new Promise((resolve) => {
  setTimeout(() => resolve("Promesa convertida a callback"), 1000);
});

promesaACallback(miPromesa, (error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});
