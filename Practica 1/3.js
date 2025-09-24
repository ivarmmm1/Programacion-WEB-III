function agregarElemento(arreglo, elemento) {
  arreglo[arreglo.length] = elemento;
}

function miFuncion(arr) {
  let resultado = { pares: [], impares: [] };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      agregarElemento(resultado.pares, arr[i]);
    } else {
      agregarElemento(resultado.impares, arr[i]);
    }
  }
  return resultado;
}

let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj);
