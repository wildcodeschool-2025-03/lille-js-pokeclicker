// ------------SAVE AND LOAD--------------- //

let caughtPokemonSaved = [];
let caughtPokemonShinySaved = [];
let caughtPokemonGen2Saved = [];
let caughtPokemonShinyGen2Saved = [];

function saveStorage() {
	localStorage.setItem("pokedexStored", JSON.stringify(caughtPokemon));
	localStorage.setItem("pokedexShinyStored", JSON.stringify(caughtPokemonShiny),);
	localStorage.setItem("pokedexGen2Stored", JSON.stringify(caughtPokemonGen2),);
	localStorage.setItem("pokedexShinyGen2Stored", JSON.stringify(caughtPokemonShinyGen2),);
}

function loadFromStorage() {
	const caughtPokemonSaved = JSON.parse(localStorage.getItem("pokedexStored"));
	const caughtPokemonShinySaved = JSON.parse(localStorage.getItem("pokedexShinyStored"),);
	const caughtPokemonGen2Saved = JSON.parse(localStorage.getItem("pokedexGen2Stored"),);
	const caughtPokemonShinyGen2Saved = JSON.parse(localStorage.getItem("pokedexShinyGen2Stored"),);

	for (let i = 0; i < caughtPokemonSaved.length; i++) {
		caughtPokemon.push(caughtPokemonSaved[i]);
	}

	for (let i = 0; i < caughtPokemon.length; i++) {
		const thumb4 = document.querySelector(
			`.pokemonLittleIMG[alt=${caughtPokemon[i].alt}]`,
		);

		const thumb5 = document.querySelector(`.pokemonRadarLittleIMG[alt=${caughtPokemon[i].alt}]`);

		if (thumb4) {
			thumb4.classList.add("caught");
		}
		if (thumb5) {
			thumb5.classList.add("caught")
		}
	}


	for (let i = 0; i < caughtPokemonShinySaved.length; i++) {
		caughtPokemonShiny.push(caughtPokemonShinySaved[i]);
	}

	for (let i = 0; i < caughtPokemonShiny.length; i++) {
		const thumbShiny = document.querySelector(
			`.shinyPokemonLittleIMG[alt=${caughtPokemonShiny[i].alt}]`,
		);
		if (thumbShiny) {
			thumbShiny.classList.add("caught");
		}
	}

	if (caughtPokemon.some(pokemon => pokemon.name === availablePokemons[150].name)) {
		mewFollow2.style.display = "block";
		isMewCaught = true;
	}

	if (caughtPokemon.some(pokemon => pokemon.alt === availablePokemons[24].alt)) {
		pikachuSprite.style.display = "block";
		isPikachuCaught = true;
	}
}

// ------------SAVE LOAD AND RESET BUTTONS--------------- //

window.addEventListener("beforeunload", saveStorage);

window.addEventListener("load", loadFromStorage);

const saveButton = document.querySelector(".saveButton");
const loadButton = document.querySelector(".loadButton");
// saveButton.addEventListener("click", () => {
// 	saveStorage();
// });
// loadButton.addEventListener("click", () => {
// 	loadFromStorage();
// });

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
	resetStorage();
});

function resetStorage() {
	dialog = confirm("Voulez vous supprimer votre sauvegarde ? ");
	if (dialog) {
		localStorage.removeItem("pokedexStored");
		localStorage.removeItem("pokedexShinyStored");
		caughtPokemon = [];
		caughtPokemonShiny = [];

		const caughtElements = document.querySelectorAll(".caught");
		caughtElements.forEach((element) => {
			element.classList.remove("caught");
		});

		console.log("Storage reset and caughtPokemon lists cleared.");
	}
}
