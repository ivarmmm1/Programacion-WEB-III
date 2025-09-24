function ejecutarCallback(callback) {
  setTimeout(callback, 2000);
}

function miCallback() {
  console.log("Callback ejecutado despues de 2 segundos");
}

ejecutarCallback(miCallback);
