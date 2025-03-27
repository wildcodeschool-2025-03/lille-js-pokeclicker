/* --------------CLICK TO SHOW/HIDE THE GADDEM MENUUUUUUU--------------- */

const pokedexOnOff = document.querySelector(".pokedexIcon");
const pokemonContainer = document.querySelector(".caughtPokemonContainer");

const pokeballOnOff = document.querySelector(".pokeballIcon");
const lastPokemonContainer = document.querySelector(".pokedexContainer");

const radarOnOff = document.querySelector(".compass");
const radarContainer = document.querySelector(".pokemonRadarContainer");

pokedexOnOff.addEventListener("click", () => {
	if (lastPokemonContainer.classList.contains("show")) {
		lastPokemonContainer.classList.remove("show");
	}
	kantoDisplay.style.display = "block";
	pokemonContainer.classList.toggle("show");
	johtoDisplay.style.display = "none";

});

pokeballOnOff.addEventListener("click", () => {
	if (pokemonContainer.classList.contains("show")) {
		pokemonContainer.classList.remove("show");
	}

	lastPokemonContainer.classList.toggle("show");
});

radarOnOff.addEventListener("click", () => {
	radarContainer.classList.toggle("show");
});

const shinyOnOff = document.querySelector(".shinyIcon");
const shinyOnOff2 = document.querySelector(".shinyIcon2")
const pokedexDisplay = document.querySelector(".caughtPokemon");
const pokedexGen2Display = document.querySelector(".caughtPokemonGen2");
const shinyDisplay = document.querySelector(".shinyCaughtPokemon");
const shinyGen2Display = document.querySelector(".shinyCaughtPokemonGen2")
let normalPokedexDisplaying = true;
let normalPokedex2Displaying = true;

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