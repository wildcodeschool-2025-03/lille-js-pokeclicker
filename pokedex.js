/* ------ FUNCTION TO CREATE THE TRACKER OF POKEMON NOT CAUGHT------- */

const isPokemonCaught = document.querySelector(".caughtPokemon");
const isShinyPokemonCaught = document.querySelector(".shinyCaughtPokemon");

const isPokemonCaughtGen2 = document.querySelector(".caughtPokemonGen2");
const isShinyPokemonCaughtGen2 = document.querySelector(".shinyCaughtPokemonGen2");

/* -------------- GENERATION 1 -------------------*/

for (let i = 0; i <= 150; i++) {
	function addToCaughtPokemon(pokemon) {
		/* ----------- NORMAL POKEMON -----------*/
		const addPokemon = document.createElement("li");
		addPokemon.classList.add("isPokemonCaught");
		isPokemonCaught.appendChild(addPokemon);

		const pokemonIMG = document.createElement("img");
		pokemonIMG.src = `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokemon.alt.toLowerCase()}.png`;
		pokemonIMG.alt = `${pokemon.alt}`;
		pokemonIMG.classList.add("pokemonLittleIMG");
		addPokemon.appendChild(pokemonIMG);

		/* ----------- SHINY POKEMON -----------*/
		const addPokemonShiny = document.createElement("li");
		addPokemonShiny.classList.add("isShinyPokemonCaught");
		isShinyPokemonCaught.appendChild(addPokemonShiny);

		const pokemonShinyIMG = document.createElement("img");
		pokemonShinyIMG.src = `https://img.pokemondb.net/sprites/ruby-sapphire/shiny/${pokemon.alt.toLowerCase()}.png`;
		pokemonShinyIMG.alt = `${pokemon.alt}`;
		pokemonShinyIMG.classList.add("shinyPokemonLittleIMG");
		addPokemonShiny.appendChild(pokemonShinyIMG);
	}
	addToCaughtPokemon(availablePokemons[i]);
}

for (let i = 151; i < availablePokemons.length; i++) {
	function addToCaughtPokemonGen2(pokemon) {
		/* ----------- NORMAL POKEMON -----------*/
		const addPokemon = document.createElement("li");
		addPokemon.classList.add("isPokemonCaughtGen2");
		isPokemonCaughtGen2.appendChild(addPokemon);

		const pokemonIMG = document.createElement("img");
		pokemonIMG.src = `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${pokemon.alt.toLowerCase()}.png`;
		pokemonIMG.alt = `${pokemon.alt}`;
		pokemonIMG.classList.add("pokemonLittleIMG");
		addPokemon.appendChild(pokemonIMG);

		/* ----------- SHINY POKEMON -----------*/
		const addPokemonShiny = document.createElement("li");
		addPokemonShiny.classList.add("isShinyPokemonCaughtGen2");
		isShinyPokemonCaughtGen2.appendChild(addPokemonShiny);

		const pokemonShinyIMG = document.createElement("img");
		pokemonShinyIMG.src = `https://img.pokemondb.net/sprites/ruby-sapphire/shiny/${pokemon.alt.toLowerCase()}.png`;
		pokemonShinyIMG.alt = `${pokemon.alt}`;
		pokemonShinyIMG.classList.add("shinyPokemonLittleIMG");
		addPokemonShiny.appendChild(pokemonShinyIMG);
	}
	addToCaughtPokemonGen2(availablePokemons[i]);
}


const isZarbiCaught = document.querySelector(".zarbiCaught")

for (let i = 0; i < zarbiList.length; i++) {
	function addToCaughtZarbi(pokemon) {
		
		const addPokemon = document.createElement("li");
		addPokemon.classList.add("isZarbiCaught");
		isZarbiCaught.appendChild(addPokemon);

		const pokemonIMG = document.createElement("img");
		pokemonIMG.src = `https://img.pokemondb.net/sprites/black-white/normal/${pokemon.alt.toLowerCase()}.png`;
		pokemonIMG.alt = `${pokemon.alt}`;
		pokemonIMG.classList.add("zarbiLittleIMG");
		addPokemon.appendChild(pokemonIMG);

	}
	addToCaughtZarbi(zarbiList[i]);
}
