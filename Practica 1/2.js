function miFuncion(cadena) {
  let invertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida = invertida + cadena[i];
  }
  return invertida;
}

let cad = miFuncion("abcd");
console.log(cad); 
