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
        alt: "Pidgey"
    }
    , {
        name: "Rattata",
        alt: "Rattata"
    }
    , {
        name: "Piafabec",
        alt: "Spearow"
    }
    , {
        name: "Pikachu",
        alt: "Pikachu"
    }
]

let isPikachuCaught = false
const pikachuSprite = document.querySelector(".walkingPikachu")

function catchRandom() {
    let i = Math.floor(Math.random() * availablePokemons.length);
    
    let lastCaughtPokemon = availablePokemons[i];
    addToPokedex(lastCaughtPokemon);

    if (lastCaughtPokemon.name === "Pikachu" && isPikachuCaught === false) {
        pikachuSprite.style.display = "block"
        isPikachuCaught = true
    }

}


const pokedexList = document.querySelector(".pokedexList")


function addToPokedex(pokemon) {
    const addPokemon = document.createElement("li")
    addPokemon.classList.add("pokedexItem")
    pokedexList.prepend(addPokemon)

    const pokemonIMG = document.createElement("img")
    pokemonIMG.src = `https://img.pokemondb.net/sprites/black-white/normal/${pokemon.alt.toLowerCase()}.png`;
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


setInterval(() => {
    catchRandom()
}, 10000)