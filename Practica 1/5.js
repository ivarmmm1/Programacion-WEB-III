function miFuncion(cadena) {
  let invertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida = invertida + cadena[i];
  }
  return cadena === invertida;
}
let band = miFuncion("oruro");
console.log(band);
band = miFuncion("hola");
console.log(band) 