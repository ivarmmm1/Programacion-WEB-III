function miPromesa(exito) {
  return {
    then: function(enCumplido) {
      setTimeout(() => {
        if (exito) {
          enCumplido("Promesa cumplida");
        }
      }, 1000);
      return miPromesa(true); 
    }
  };
}

miPromesa(true)
  .then(function(resultado) {
    console.log(resultado);
    return "Primer then";
  })
  .then(function(resultado) {
    console.log(resultado);
    return "Segundo then";
  })
  .then(function(resultado) {
    console.log(resultado);
  });
