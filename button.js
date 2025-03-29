const myImg = document.querySelector("body"); 
const buttonNight = document.getElementById("buttonNight");
const body = document.querySelector("body");

function changeLightMode(){
	myImg.classList.toggle("dark")	
}

body.addEventListener('swiped-left', function(e) {
    myImg.classList.toggle("dark") // the element that was swiped
});

buttonNight.addEventListener("click", changeLightMode )




 