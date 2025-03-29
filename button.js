// AJOUT DE LA FONCTIONNALITÉ NUIT

const myImg = document.querySelector("body"); 
const buttonNightSun = document.getElementById("buttonNightSun");

function changeLightMode(){
	myImg.classList.toggle("dark")	
};

// AJOUT D'UNE VOIX POUR PIKACHU

buttonNightSun.addEventListener("click", changeLightMode );

const clickMusicPikachu = document.querySelector(".walkingPikachu"); 
const voice = new Audio('stock-img/pika-pikachu-14757.mp3')

clickMusicPikachu.addEventListener("click", function () {
    voice.play();
});

// AJOUT DE L'OST

const clickOST = document.getElementById("buttonOST");
const musicOST = new Audio("stock-img/OSTPokémon.mp3");

clickOST.addEventListener("click" , function playOST() {
	if (musicOST.paused) {
		musicOST.currentTime = 0;
		musicOST.play();
	} else {
		musicOST.pause();
		musicOST.currentTime = 0;
	}
});














 