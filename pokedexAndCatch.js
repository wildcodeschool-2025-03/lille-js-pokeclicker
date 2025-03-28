/*  --------- RANDOM CATCH + ADD TO POKEDEX ---------- */

let isPikachuCaught = false;
let isMewCaught = false;
const pikachuSprite = document.querySelector(".walkingPikachu");
const mewFollow2 = document.querySelector(".walkingMew");

let caughtPokemon = [];
let caughtPokemonShiny = [];

let caughtPokemonGen2 = [];
let caughtPokemonShinyGen2 = [];

let zarbiDex = [];
let shinyZarbiCaught = [];

document.title = `P-C (${caughtPokemon.length}/151)`;

function catchRandom() {
	let totalRarity, random, cumulativeRarity = 0, lastCaughtPokemon;

	if (isLentilScopOn === true) {
		totalRarity = currentRoad.reduce((sum, pokemon) => sum + pokemon.rarity2, 0);
		random = Math.random() * totalRarity;

		for (let i = 0; i < currentRoad.length; i++) {
			cumulativeRarity += currentRoad[i].rarity2;
			if (random < cumulativeRarity) {
				lastCaughtPokemon = currentRoad[i];
				break;
			}
		}
	} else if (isSprayDuckOn === true) {
		totalRarity = currentRoad.reduce((sum, pokemon) => sum + pokemon.rarity3, 0);
		random = Math.random() * totalRarity;

		for (let i = 0; i < currentRoad.length; i++) {
			cumulativeRarity += currentRoad[i].rarity3;
			if (random < cumulativeRarity) {
				lastCaughtPokemon = currentRoad[i];
				break;
			}
		}
	} else if (isMewFinderOn === true) {
		totalRarity = currentRoad.reduce((sum, pokemon) => sum + pokemon.rarity4, 0);
		random = Math.random() * totalRarity;

		for (let i = 0; i < currentRoad.length; i++) {
			cumulativeRarity += currentRoad[i].rarity4;
			if (random < cumulativeRarity) {
				lastCaughtPokemon = currentRoad[i];
				break;
			}
		}
	} else {
		totalRarity = currentRoad.reduce((sum, pokemon) => sum + pokemon.rarity, 0);
		random = Math.random() * totalRarity;

		for (let i = 0; i < currentRoad.length; i++) {
			cumulativeRarity += currentRoad[i].rarity;
			if (random < cumulativeRarity) {
				lastCaughtPokemon = currentRoad[i];
				break;
			}
		}
	}



	if (lastCaughtPokemon) {
		if (isShinyCharmOn === true) {
			isShiny = Math.random() < 0.10;
		} else {
			isShiny = Math.random() < 0.01;
		}
		lastCaughtPokemon.isShiny = isShiny;
		addToPokedex(lastCaughtPokemon);

		/* -------- AJOUT PIKACHU & MEW -------- */

		if (lastCaughtPokemon.name === "Pikachu" && isPikachuCaught === false) {
			pikachuSprite.style.display = "block";
			isPikachuCaught = true;
		}

		if (lastCaughtPokemon.name === "Mew" && isMewCaught === false) {
			mewFollow2.style.display = "block";
			isMewCaught = true;
		}

		/* AJOUT DES POKEMONS DANS LE RADAR ET LE POKEDEX */


		if (lastCaughtPokemon.name === availablePokemons[200].name) {
			const randomIndex = Math.floor(Math.random() * zarbiList.length);
			const zarbiCaught = zarbiList[randomIndex];
		
			if (!zarbiDex.some(pokemon => pokemon.alt === zarbiCaught.alt)) {
				zarbiDex.push(zarbiCaught);
		
				const zarbiElement = document.querySelector(`.zarbiLittleIMG[alt=${zarbiCaught.alt}]`);
				if (zarbiElement) {
					zarbiElement.classList.add("zCaught");
				}
			}
		}

		if (!caughtPokemon.some(pokemon => pokemon.name === lastCaughtPokemon.name)) {
			const thumb = document.querySelector(
				`.pokemonLittleIMG[alt=${lastCaughtPokemon.alt}]`,
			);
			thumb.classList.add("caught");

			const thumb2 = document.querySelector(
				`.pokemonRadarLittleIMG[alt=${lastCaughtPokemon.alt}]`,
			);
			thumb2.classList.add("caught");

			caughtPokemon.push(lastCaughtPokemon);
		}

		if (
			lastCaughtPokemon.isShiny === true &&
			!caughtPokemonShiny.some(pokemon => pokemon.name === lastCaughtPokemon.name)
		) {
			caughtPokemonShiny.push(lastCaughtPokemon);
			shinySound.play();



			const thumb3 = document.querySelector(
				`.shinyPokemonLittleIMG[alt=${lastCaughtPokemon.alt}]`,
			);
			thumb3.classList.add("caught");
		}

		if (lastCaughtPokemon.name === availablePokemons[200].name) {
            zarbiCaught = Math.random() * zarbiList.length;
            

            if (!zarbiDex.some(pokemon => pokemon.alt === zarbiCaught.alt)) {
                zarbiDex.push(zarbiCaught);

                const zarbiElement = document.querySelector(`.zarbiLittleIMG[alt=${zarbiCaught.alt}]`);
                if (zarbiElement) {
                    zarbiElement.classList.add("zCaught");
                }
            }
			// if (lastCaughtPokemon.isShiny === true){
			// 	const zarbiElement = document.querySelector(`.zarbiLittleIMG[alt=${shinyZarbiCaught.alt}]`);
            //     if (zarbiElement) {
            //         zarbiElement.classList.add("zCaught");
			// }
        }

	}
}
