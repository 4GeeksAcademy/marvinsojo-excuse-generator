/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Mi perra",
    "Mi gato",
    "Un mono",
    "Bolívar",
    "Samuel",
    "Alexander",
    "Cristian",
    "Un cochino",
    "Un sith",
    "Una rata"
  ];
  let action = [
    "rompió",
    "pisó",
    "quemó",
    "rayó",
    "escondió",
    "cortó",
    "desapareció",
    "orinó",
    "derritió",
    "desintegró",
    "se comió"
  ];
  let what = [
    "mi tarea",
    "mi carro",
    "mi laptop",
    "mis zapatos",
    "las llaves de mi casa",
    "las llaves de mi carro",
    "la puerta de mi casa",
    "mis herramientas",
    "mi teléfono",
    "mi reloj",
    "las teclas de mi laptop"
  ];
  let when = [
    "en este momento",
    "esta mañana",
    "cuando iba saliendo de casa",
    "mientras estaba dormido",
    "hace 5 minutos",
    "justo en el momento que me preguntaste",
    "cuando me llamaste",
    "Ahorita",
    "y me di cuenta ahoritica"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excusa;

  excusa = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  let textExcuse = document.getElementById("excuse");
  textExcuse.innerText = excusa;
};
