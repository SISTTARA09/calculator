"use strict";
const cl = console.log;
// GET THE ELEMENTS
let calculator = document.getElementById("calculator");
const showSpace = document.getElementById("showSpace");
const clear = document.getElementById("clear");
const numbersParent = document.querySelector(".numbers-parent");
const charactersParent = document.querySelector(".special-characters");
const equals = document.getElementById("equals");
// WORK WITH CLEAR BUTTON
clear.addEventListener("click", (ev) => {
	showSpace.textContent = "";
});
// WORK WITH CHARACTERS
charactersParent.addEventListener("click", (ev) => {
	const target = ev.target;
	if (target !== charactersParent) showSpace.textContent += target.textContent;
});
// WORK WITH NUMBERS
numbersParent.addEventListener("click", (ev) => {
	let target = ev.target;
	if (target !== numbersParent && target !== equals)
		showSpace.textContent += target.textContent;
	if (target === equals) {
		let equation = showSpace.textContent;
		let negative = ["+", "-", "x", "/", "%"];
		negative.map((ele) => {
			if (equation.includes(ele) && equation.indexOf(ele) !== 0) {
				let equationArr = equation.split(ele).map((ele) => +ele);
				let result =
					ele === "+"
						? equationArr[0] + equationArr[1]
						: ele === "-"
						? equationArr[0] - equationArr[1]
						: ele === "x"
						? equationArr[0] * equationArr[1]
						: ele === "/"
						? equationArr[0] / equationArr[1]
						: equationArr[0] % equationArr[1];
				return (showSpace.textContent = result);
			}
		});
	}
});
