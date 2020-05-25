var _= require('lodash');

var array = [1, 2, 3, 4, 5, 6];

console.log('Answer:', _.without(array, 3));



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")



function bodyGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}


/*color1.addEventListener("input", function() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
})*/


color1.addEventListener("input", bodyGradient)

// Don't need to call the function in event listener as 
//it is already triggered by the input event. 


color2.addEventListener("input", bodyGradient)



//BONUS: Add a random button which generates two random numbers for the colour inputs.