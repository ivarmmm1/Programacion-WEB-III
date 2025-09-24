//Con callbacks:
 
function obtenerDatos(callback) {
  setTimeout(() => {
    callback("Datos obtenidos");
  }, 1000);
}

obtenerDatos((datos) => {
  console.log(datos);
  obtenerDatos((otrosDatos) => {
    console.log(otrosDatos);
  });
});


//Con async/await:
function obtenerDatoss() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos");
    }, 1000);
  });
}

async function procesarDatoss() {
  const datos1 = await obtenerDatoss();
  console.log(datos1);
  const datos2 = await obtenerDatoss();
  console.log(datos2);
}
procesarDatoss();

