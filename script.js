const availablePokemons = [
    {
        name: "Salamèche",
        alt: "Charmander"
    }
    , {
        name: "Carapuce",
        alt: "Squirtle"
    }
    , {
        name: "Bulbizarre",
        alt: "Bulbasaur"
    }
    , {
        name: "Roucool",
        alt: "Pidgeot"
    }
    , {
        name: "Rattata",
        alt: "Rattata"
    }
    , {
        name: "Piafabec",
        alt: "Piafabec"
    }
]

function catchRandom() {
    let i = Math.floor(Math.random() * availablePokemons.length);

    let lastCaughtPokemon = availablePokemons[i];
    console.log(lastCaughtPokemon);
    addToPokedex(lastCaughtPokemon)
}




const pokedexList = document.querySelector(".pokedexList")


function addToPokedex(pokemon) {
    const addPokemon = document.createElement("li")
    addPokemon.classList.add("pokedexItem")
    pokedexList.prepend(addPokemon)

    const pokemonIMG = document.createElement("img")
    pokemonIMG.src = `stock-img/pokemons/${pokemon.name}.png`
    pokemonIMG.alt = `${pokemon.alt}`
    pokemonIMG.classList.add("pokemonIMG")
    addPokemon.appendChild(pokemonIMG)

    const pokemonTitle = document.createElement("p")
    pokemonTitle.innerHTML = `${pokemon.name}`
    pokemonTitle.classList.add("pokemonTitle")
    addPokemon.appendChild(pokemonTitle)
}


const clickTrainer = document.querySelector(".walkingTrainer");
let totalClick = 0

clickTrainer.addEventListener("click", () => {
    totalClick += 1
    if (totalClick % 10 === 0) {
        catchRandom()
    }
});


