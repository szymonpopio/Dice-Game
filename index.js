const number1 = document.querySelector("img.img1")
const number2 = document.querySelector("img.img2")


let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

number1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
number2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

if (randomNumber1 < randomNumber2) {
	document.getElementById("title").innerHTML = "Player 2 Wins! 🚩"
} if (randomNumber1 === randomNumber2) {
	document.getElementById("title").innerHTML = "Draw!"
} if (randomNumber1 > randomNumber2) {
	document.getElementById("title").innerHTML = "🚩 Player 1 Wins!"
}