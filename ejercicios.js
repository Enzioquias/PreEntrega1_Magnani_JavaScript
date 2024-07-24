alert("Bienvenido a la calculadora de forrajes para produccion avícola");

let animal = 0;
let cantidadPollitas = 0;
let esNumero = true;
let razaGallinas = 0;

do {
  animal = parseFloat(
    prompt("Ingrese 1 para gallinas ponedoras o 2 para pollos parrilleros")
  );
} while (animal != 1 && animal != 2);

if (animal == 1) {
  // Caso gallinas ponedoras
  alert("Elegiste la calculadora para gallinas ponedoras");
  do {
    cantidadPollitas = prompt(
      "Ingrese la cantidad de pollitas ponedoras a criar"
    );
    parseInt(cantidadPollitas);
    esNumero = isNaN(cantidadPollitas);
    console.log(esNumero);
  } while (cantidadPollitas <= 0 || esNumero == true);
  do {
    razaGallinas = prompt(
      "Ingrese 1 para seleccionar raza Lohmann Brown(marron), 2 para Leghorn(blanca)"
    );
  } while (razaGallinas != 1 && razaGallinas != 2);
  alert(
    "La cantidad de alimento para recriar sus " +
      cantidadPollitas +
      " pollitas ponedoras hasta las 16 semanas es de " +
      cantidadDeAlimento(animal, razaGallinas, cantidadPollitas) +
      " kilogramos de balanceado."
  );
} else {

  // Caso pollos parrilleros
  alert("Elegiste la calculadora para pollos parrilleros");
  do {
    cantidadPollitas = prompt(
      "Ingrese la cantidad de pollitos parrilleros a criar"
    );
    parseInt(cantidadPollitas);
    esNumero = isNaN(cantidadPollitas);
    console.log(esNumero);
  } while (cantidadPollitas <= 0 || esNumero == true);
  alert(
    "La cantidad de alimento para criar sus " +
      cantidadPollitas +
      " pollitos parrilleros hasta fecha de faena son " +
      cantidadDeAlimento(animal, razaGallinas, cantidadPollitas) +
      " kilogramos de balanceado."
  );
}

function cantidadDeAlimento(animal, razaGallinas, cantidadAnimales) {
  let kgRaza = 0;
  if (animal == 1) {
    if (razaGallinas == 1) {
      kgRaza = 7;
    } else if (razaGallinas == 2) {
      kgRaza = 6;
    } else {
      alert("Ha habido un error y el programa se detendra");
    }
    return (kgRaza * cantidadAnimales);
  } else {
    return (5.2 * cantidadAnimales)
  }
}
