const myImg = document.querySelector("body");
console.log(myImg)
const buttonNight = document.getElementById("buttonNight");

let isFirstImage = true;

buttonNight.addEventListener("click", function () {
	if (isFirstImage) {
		myImg.url = "stock-img/thumb-1920-641430.jpg";
	} else {
		myImg.url = "stock-img/backgroundMoving.png";
	}
	isFirstImage =! isFirstImage;
});