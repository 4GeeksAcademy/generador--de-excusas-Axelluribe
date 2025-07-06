
  import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sujeto = ['mi perro', 'mi abuela', 'el cartero', 'Mi hijo'];
  let verb = ['se comio ', 'perdio', 'estrello', 'rompio'];
  let predicado = ['mi tarea', 'las llaves', 'el carro', 'el telefono'];

  // Función para generar números random
  let generarNumeroRandom = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  let numeroRandom = generarNumeroRandom(sujeto);
  console.log("Número random:", numeroRandom);
  let excusa = sujeto[numeroRandom] + " " + verb[numeroRandom] + " " + predicado[numeroRandom];
  console.log("frase:", excusa);

  // Mostrar la excusa en la página
  document.getElementById("excusa").innerHTML = excusa;
}