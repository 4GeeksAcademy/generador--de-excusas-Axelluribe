
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

let sujeto = ["mi perro", "mi abuela", "el cartero", "mi hijo"];
let verb = ["se comió", "perdió", "estrelló", "rompió"];
let predicado = ["mi tarea", "las llaves", "el carro", "el teléfono"];

let generarNumeroRandom = function (array) {
  return Math.floor(Math.random() * array.length);
};

let randomSujeto = generarNumeroRandom(sujeto);
let randomVerbo = generarNumeroRandom(verb);
let randomPredicado = generarNumeroRandom(predicado);

let excusa = `${sujeto[randomSujeto]} ${verb[randomVerbo]} ${predicado[randomPredicado]}`;

console.log("Frase:", excusa);
document.getElementById("excusa").innerHTML = excusa;
};