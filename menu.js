/* --------------CLICK TO SHOW/HIDE THE GADDEM MENUUUUUUU--------------- */

const pokedexOnOff = document.querySelector(".pokedexIcon");
const pokemonContainer = document.querySelector(".caughtPokemonContainer");

const pokeballOnOff = document.querySelector(".pokeballIcon");
const lastPokemonContainer = document.querySelector(".pokedexContainer");

const radarOnOff = document.querySelector(".compass");
const radarContainer = document.querySelector(".pokemonRadarContainer");

const zarbidexIcon = document.querySelector(".zarbidexIcon")
const zarbidexContainer = document.querySelector(".zarbidexContainer")

pokedexOnOff.addEventListener("click", () => {
	if (lastPokemonContainer.classList.contains("show")) {
		lastPokemonContainer.classList.remove("show");
	
	}

	if (zarbidexContainer.classList.contains("show")) {
		zarbidexContainer.classList.remove("show");
	}

	kantoDisplay.style.display = "block";
	pokemonContainer.classList.toggle("show");
	johtoDisplay.style.display = "none";

});

pokeballOnOff.addEventListener("click", () => {
	if (pokemonContainer.classList.contains("show")) {
		pokemonContainer.classList.remove("show");
	}

	if (zarbidexContainer.classList.contains("show")) {
		zarbidexContainer.classList.remove("show");
	}

	lastPokemonContainer.classList.toggle("show");
});

zarbidexIcon.addEventListener("click", () => {

	if (lastPokemonContainer.classList.contains("show")) {
		lastPokemonContainer.classList.remove("show");
	}

	if (pokemonContainer.classList.contains("show")) {
		pokemonContainer.classList.remove("show");
	}

	zarbidexContainer.classList.toggle("show")

});

radarOnOff.addEventListener("click", () => {
	radarContainer.classList.toggle("show");
});

const shinyOnOff = document.querySelector(".shinyIcon");
const shinyOnOff2 = document.querySelector(".shinyIcon2")
const shinyOnOffZarbi = document.querySelector(".shinyIcon3")

const pokedexDisplay = document.querySelector(".caughtPokemon");
const pokedexGen2Display = document.querySelector(".caughtPokemonGen2");
const zarbidexDisplay = document.querySelector(".zarbiCaught")

const shinyDisplay = document.querySelector(".shinyCaughtPokemon");
const shinyGen2Display = document.querySelector(".shinyCaughtPokemonGen2")
const zarbiShinyCaught = document.querySelector(".shinyZarbiCaught")

let normalPokedexDisplaying = true;
let normalPokedex2Displaying = true;
let normalZarbidexDisplaying = true;


shinyOnOff.addEventListener("click", () => {
	if (normalPokedexDisplaying === true) {
		pokedexDisplay.style.display = "none";
		shinyDisplay.style.display = "flex";
		shinyOnOff.classList.add("on");
		normalPokedexDisplaying = false;
	} else if (normalPokedexDisplaying === false) {
		pokedexDisplay.style.display = "flex";
		shinyDisplay.style.display = "none";
		shinyOnOff.classList.remove("on");
		normalPokedexDisplaying = true;
	}
});


shinyOnOff2.addEventListener("click", () => {
	if (normalPokedex2Displaying === true) {
		pokedexGen2Display.style.display = "none";
		shinyGen2Display.style.display = "flex";
		shinyOnOff2.classList.add("on");
		normalPokedex2Displaying = false;
	} else if (normalPokedex2Displaying === false) {
		pokedexGen2Display.style.display = "flex";
		shinyGen2Display.style.display = "none";
		shinyOnOff2.classList.remove("on");
		normalPokedex2Displaying = true;
	}
});

shinyOnOffZarbi.addEventListener("click", () => {
	if (normalZarbidexDisplaying === true) {
		zarbidexDisplay.style.display = "none";
		zarbiShinyCaught.style.display = "flex";
		shinyOnOffZarbi.classList.add("on")
		normalZarbidexDisplaying = false;
	}
	else if (normalZarbidexDisplaying === false) {
		zarbidexDisplay.style.display = "flex";
		zarbiShinyCaught.style.display = "none";
		shinyOnOffZarbi.classList.remove("on");
		normalZarbidexDisplaying = true;
	}
	
})

const kantoDisplay = document.querySelector(".kantoSection")
const johtoDisplay = document.querySelector(".johtoSection")
const kantoButton = document.querySelector(".kanto")
const johtoButton = document.querySelector(".johto")

kantoButton.addEventListener("click", () => {
	kantoDisplay.style.display = "block"
	johtoDisplay.style.display = "none"
})

johtoButton.addEventListener("click", () => {
	johtoDisplay.style.display = "block"
	kantoDisplay.style.display = "none"
})

const infoButton = document.querySelector(".infoButton")
const infoBubble = document.querySelector(".infoBubbleContainer")

infoButton.addEventListener ("click", () => {
	infoBubble.classList.toggle("show")
})



