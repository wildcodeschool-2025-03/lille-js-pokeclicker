const myImg = document.querySelector("body"); 
const buttonNightSun = document.getElementById("buttonNightSun");

function changeLightMode(){
	myImg.classList.toggle("dark")	
};

buttonNightSun.addEventListener("click", changeLightMode );

const clickMusicPikachu = document.querySelector(".walkingPikachu"); 
const voice = new Audio('stock-img/pika-pikachu-14757.mp3')

clickMusicPikachu.addEventListener("click", function () {
    
	voice.play();
});












 