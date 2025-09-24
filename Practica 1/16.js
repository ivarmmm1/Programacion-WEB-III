// con promesas
function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ nombre: "Juan", edad: 30 }), 1000);
  });
}

obtenerUsuario().then(usuario => {
  console.log("Usuario:", usuario);
});

//Con async/await:

async function mostrarUsuario() {
  const usuario = await obtenerUsuario();
  console.log("Usuario:", usuario);
}

mostrarUsuario();
