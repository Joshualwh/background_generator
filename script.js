var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']


function newColorFind(){
  let randomColorString = '#';
  for (let x = 0; x < 6; x++){
      let index = Math.floor(Math.random() * 16);
      let value = arrayOfColorFunctions[index];
      randomColorString += value
  }
  console.log(randomColorString);
  return(randomColorString)
}

function setGradient() {
  // console.log(color1.value);
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";
  css.textContent = body.style.background + ";";
}

setGradient();

function randomizeGradient() {
  // console.log("Ran randomizedGradient function")
  color1.value = newColorFind();
  color2.value = newColorFind();
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomizeGradient);