/*  --------- ADD TO LAST CATCH TRACKER ---------- */

const pokedexList = document.querySelector(".pokedexList");

function addToPokedex(pokemon) {
	const addPokemon = document.createElement("li");
	addPokemon.classList.add("pokedexItem");
	pokedexList.prepend(addPokemon);

	const pokemonIMG = document.createElement("img");
	pokemonIMG.src = `https://img.pokemondb.net/sprites/black-white/normal/${pokemon.alt.toLowerCase()}.png`;
	if (pokemon.isShiny) {
		pokemonIMG.src = `https://img.pokemondb.net/sprites/black-white/shiny/${pokemon.alt.toLowerCase()}.png`;
	}
	pokemonIMG.alt = `${pokemon.alt}`;
	pokemonIMG.classList.add("pokemonIMG");
	addPokemon.appendChild(pokemonIMG);

	const pokemonTitle = document.createElement("p");
	pokemonTitle.innerHTML = `${pokemon.name}`;
	if (pokemon.isShiny) {
		pokemonTitle.innerHTML = `${pokemon.name} *`;
	}
	pokemonTitle.classList.add("pokemonTitle");
	addPokemon.appendChild(pokemonTitle);
}