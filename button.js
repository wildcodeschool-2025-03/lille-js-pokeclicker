const myImg = document.querySelector("body"); 
const buttonNight = document.getElementById("buttonNight");

function changeLightMode(){
	myImg.classList.toggle("dark")	
}

buttonNight.addEventListener("click", changeLightMode )






 