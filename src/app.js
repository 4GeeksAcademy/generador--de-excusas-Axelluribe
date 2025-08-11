
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

let sujeto = ["mi perro", "mi abuela", "el cartero", "mi hijo"];
  let verb = ["se comio ", "perdio", "estrello", "rompio"];
  let predicado = ["mi tarea", "las llaves", "el carro", "el telefono"];

  let generarNumeroRandom = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  let numeroRandom = generarNumeroRandom(sujeto);
  console.log("Número random:", numeroRandom);

  let excusa = `${sujeto[numeroRandom]} ${verb[numeroRandom]} ${predicado[numeroRandom]}`

  console.log("Frase:", excusa);
  document.getElementById("excusa").innerHTML = excusa;
};