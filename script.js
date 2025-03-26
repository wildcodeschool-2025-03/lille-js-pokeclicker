let currentRoad = pokemonOnRoad1;
let shinySound = new Audio("sounds/shinySoundEffect.mp3")

// -------------SHINY CHARM BUTTON--------------- //

const shinyCharm = document.querySelector(".shinyCharm")
const lentilScop = document.querySelector(".lentilScop")
const sprayDuck = document.querySelector(".sprayDuck")
const bike = document.querySelector(".bike")
const mewFinder = document.querySelector(".mewFinder")

let isShinyCharmOn = false
let isLentilScopOn = false
let isSprayDuckOn = false
let isBikeOn = false
let isMewFinderOn = false


shinyCharm.addEventListener("click", () => {
	isShinyCharmOn = true;
	setTimeout(() => {
		isShinyCharmOn = false;
	}, 60000);
	shinyCharm.style.display = "none";
});

lentilScop.addEventListener("click", () => {
	isLentilScopOn = true;
	sprayDuck.style.pointerEvents = "none";
	sprayDuck.classList.add("desactivated");
	mewFinder.style.pointerEvents = "none";
	mewFinder.classList.add("desactivated");
	setTimeout(() => {
		isLentilScopOn = false;
		sprayDuck.style.pointerEvents = "auto";
		sprayDuck.classList.remove("desactivated");
		mewFinder.style.pointerEvents = "auto";
		mewFinder.classList.remove("desactivated");
	}, 60000);
	lentilScop.style.display = "none";
});

sprayDuck.addEventListener("click", () => {
	isSprayDuckOn = true;
	lentilScop.style.pointerEvents = "none";
	lentilScop.classList.add("desactivated");
	mewFinder.style.pointerEvents = "none";
	mewFinder.classList.add("desactivated");

	setTimeout(() => {
		isSprayDuckOn = false;
		lentilScop.style.pointerEvents = "auto";
		lentilScop.classList.remove("desactivated");
		mewFinder.style.pointerEvents = "auto";
		mewFinder.classList.remove("desactivated");
	}, 60000);
	sprayDuck.style.display = "none";
});

bike.addEventListener("click", () => {
	isBikeOn = true;
	setTimeout(() => {
		isBikeOn = false;
	}, 60000);
	bike.style.display = "none";
});

mewFinder.addEventListener("click", () => {

	isMewFinderOn = true;
	sprayDuck.style.pointerEvents = "none";
	sprayDuck.classList.add("desactivated");
	lentilScop.style.pointerEvents = "none";
	lentilScop.classList.add("desactivated");

	setTimeout(() => {
		isMewFinderOn = false;
		sprayDuck.style.pointerEvents = "auto";
		sprayDuck.classList.remove("desactivated");
		lentilScop.style.pointerEvents = "auto";
		lentilScop.classList.remove("desactivated");
	}, 60000);

	mewFinder.style.display = "none";
});

// -------------MUSIC BUTTON--------------- //

const musicButton = document.querySelector(".musicButton")
const backgroundMusic = document.querySelector("audio")
musicButton.addEventListener("click", () => {
	if (musicButton.src == "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7u-933d7f26-3de9-44d4-a119-61eea658e033.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dS05MzNkN2YyNi0zZGU5LTQ0ZDQtYTExOS02MWVlYTY1OGUwMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXXSjgtNsqwIljKwyX_Q1HYFS5jagY0FhFuNDYh36h4") {
		musicButton.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7t-64571c15-4b63-4e09-8dc6-54145b532ad4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dC02NDU3MWMxNS00YjYzLTRlMDktOGRjNi01NDE0NWI1MzJhZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WMhmwMen_UG38_nqeRj6eHdqYBnXv0eTtp7lheRxpKA"
		backgroundMusic.volume = 0.2;
		backgroundMusic.play();
	} else if (musicButton.src == "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7t-64571c15-4b63-4e09-8dc6-54145b532ad4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dC02NDU3MWMxNS00YjYzLTRlMDktOGRjNi01NDE0NWI1MzJhZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WMhmwMen_UG38_nqeRj6eHdqYBnXv0eTtp7lheRxpKA") {
		musicButton.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7u-933d7f26-3de9-44d4-a119-61eea658e033.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dS05MzNkN2YyNi0zZGU5LTQ0ZDQtYTExOS02MWVlYTY1OGUwMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXXSjgtNsqwIljKwyX_Q1HYFS5jagY0FhFuNDYh36h4"
		backgroundMusic.volume = 0;
		backgroundMusic.pause();
	}
});


