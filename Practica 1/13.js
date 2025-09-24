//Con promesas:
function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 1 completada"), 1000);
  });
}

function tarea2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), 1000);
  });
}

tarea1()
  .then(resultado1 => {
    console.log(resultado1);
    return tarea2();
  })
  .then(resultado2 => {
    console.log(resultado2);
  });

 //Con async/await:

function tarea_1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de la tarea 1");
    }, 1000);
  });
}

function tarea_2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de la tarea 2");
    }, 1000);
  });
}

async function ejecutarTareas() {
  const resultado1 = await tarea_1();
  console.log(resultado1);
  const resultado2 = await tarea_2();
  console.log(resultado2);
}

ejecutarTareas();
