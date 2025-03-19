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

let lastCaughtPokemonName = ""

function catchRandom() {
    let i = Math.floor(Math.random() * availablePokemons.length);

    lastCaughtPokemonName = availablePokemons[i].name;
    console.log(lastCaughtPokemonName);
}




const pokedexList = document.querySelector(".pokedexList")


function addToPokedex() {
    const addPokemon = document.createElement("li")
    pokedexList.appendChild(addPokemon)

    const pokemonIMG = document.createElement("img")
    pokemonIMG.src = "stock-img/pokemons/ratata.png"
    pokemonIMG.alt = "ratata"
    pokemonIMG.classList.add("pokemonIMG")
    addPokemon.appendChild(pokemonIMG)

}


const clickTrainer = document.querySelector(".walkingTrainer");
let totalClick = 0

clickTrainer.addEventListener("click", () => {
    totalClick += 1
    if (totalClick % 10 === 0) {
        catchRandom(availablePokemons)
        addToPokedex()
    }
});



