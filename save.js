// ------------SAVE AND LOAD--------------- //

let caughtPokemonSaved = [];
let caughtPokemonShinySaved = [];
let caughtPokemonGen2Saved = [];
let caughtPokemonShinyGen2Saved = [];
let caughtZarbiSaved = [];
let caughtShinyZarbiSaved = [];

function saveStorage() {
	localStorage.setItem("pokedexStored", JSON.stringify(caughtPokemon));
	localStorage.setItem("pokedexShinyStored", JSON.stringify(caughtPokemonShiny),);
	localStorage.setItem("pokedexGen2Stored", JSON.stringify(caughtPokemonGen2),);
	localStorage.setItem("pokedexShinyGen2Stored", JSON.stringify(caughtPokemonShinyGen2),);
	localStorage.setItem("pokedexZarbiStored", JSON.stringify(zarbiDex),);
	localStorage.setItem("pokedexShinyZarbiStored", JSON.stringify(shinyZarbiDex),);
}

function loadFromStorage() {
	const caughtPokemonSaved = JSON.parse(localStorage.getItem("pokedexStored"));
	const caughtPokemonShinySaved = JSON.parse(localStorage.getItem("pokedexShinyStored"),);
	const caughtPokemonGen2Saved = JSON.parse(localStorage.getItem("pokedexGen2Stored"),);
	const caughtPokemonShinyGen2Saved = JSON.parse(localStorage.getItem("pokedexShinyGen2Stored"),);
	const caughtZarbiSaved = JSON.parse(localStorage.getItem("pokedexZarbiStored"));
	const caughtShinyZarbiSaved = JSON.parse(localStorage.getItem("pokedexShinyZarbiStored"));

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



	for (let i = 0; i < caughtZarbiSaved.length; i++){
		zarbiDex.push(caughtZarbiSaved[i])
	}

	for (let i = 0; i < zarbiDex.length; i++) {
		const thumb6 = document.querySelector(
			`.zarbiLittleIMG[alt=${zarbiDex[i].alt}]`,
		);

		if (thumb6) {
			thumb6.classList.add("zCaught");
		}
	}



	for (let i = 0; i < caughtShinyZarbiSaved.length; i++){
		shinyZarbiDex.push(caughtShinyZarbiSaved[i])
	}

	for (let i = 0; i < caughtPokemonShiny.length; i++) {
		const thumbShinyZarbi = document.querySelector(
			`.shinyZarbiLittleIMG[alt=${shinyZarbiDex[i].alt}]`,
		);
		if (thumbShinyZarbi) {
			thumbShinyZarbi.classList.add("zCaught");
		}
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







window.addEventListener("beforeunload", () => {
    localStorage.setItem("lastExitTime", Date.now());
});

document.addEventListener("DOMContentLoaded", () => {
    const lastExitTime = localStorage.getItem("lastExitTime");
    if (lastExitTime) {
        const elapsedTime = Date.now() - parseInt(lastExitTime, 10);

        // Simuler le passage du temps
        stepAccumulator += elapsedTime;
        catchAccumulator += elapsedTime;

        // Mettre à jour les compteurs en fonction du temps écoulé
        while (stepAccumulator >= stepInterval) {
            stepsBeforeRoadChange -= 1;
            if (stepsBeforeRoadChange === 0) {
                stepsBeforeRoadChange = 400;
            }
            totalClick += 1;
    if (totalClick % 400 === 0) {
        changeRoad();
    }
            stepAccumulator -= stepInterval;
        }

        while (catchAccumulator >= catchInterval) {
            catchRandom();
            catchAccumulator -= catchInterval;
        }

        // Mettre à jour l'affichage
        if (stepIndicator) {
            stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
        }
    }
});