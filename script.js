let currentRoad = pokemonOnRoad1

let isPikachuCaught = false
const pikachuSprite = document.querySelector(".walkingPikachu")

let caughtPokemon = []

function catchRandom() {
    let i = Math.floor(Math.random() * currentRoad.length);

    let lastCaughtPokemon = currentRoad[i];
    addToPokedex(lastCaughtPokemon);

    if (lastCaughtPokemon.name === "Pikachu" && isPikachuCaught === false) {
        pikachuSprite.style.display = "block"
        isPikachuCaught = true
    }

    if (!caughtPokemon.includes(lastCaughtPokemon.name)) {
        const thumb = document.querySelector(`.isPokemonCaught img[alt=${lastCaughtPokemon.alt}]`)
        thumb.classList.add("caught");
        caughtPokemon.push(lastCaughtPokemon.name);
    }
}

const sign = document.querySelector(".stepSign")
const mapRoads = document.createElement("img")
mapRoads.classList.add("mapRoadsIMG")
mapRoads.src = "stock-img/maps/mapRoad1.png"
sign.prepend(mapRoads)

function changeRoad() {
    if (currentRoad == pokemonOnRoad1) {
        currentRoad = pokemonOnRoad2
        roadName.innerHTML = "Road 2"
        mapRoads.src = "stock-img/maps/mapRoad2.png"
    } else if (currentRoad == pokemonOnRoad2) {
        currentRoad = pokemonOnRoad3
        roadName.innerHTML = "Road 3"
        mapRoads.src = "stock-img/maps/mapRoad3.png"
    } else if (currentRoad == pokemonOnRoad3) {
        currentRoad = pokemonOnRoad4
        roadName.innerHTML = "Road 4"
        mapRoads.src = "stock-img/maps/mapRoad4.png"
    } else if (currentRoad == pokemonOnRoad4) {
        currentRoad = pokemonOnRoad5
        roadName.innerHTML = "Road 5"
        mapRoads.src = "stock-img/maps/mapRoad5.png"
    } else if (currentRoad == pokemonOnRoad5) {
        currentRoad = pokemonOnRoad6
        roadName.innerHTML = "Road 6"
        mapRoads.src = "stock-img/maps/mapRoad6.png"
    } else if (currentRoad == pokemonOnRoad6) {
        currentRoad = pokemonOnRoad7
        roadName.innerHTML = "Road 7"
        mapRoads.src = "stock-img/maps/mapRoad7.png"
    } else if (currentRoad == pokemonOnRoad7) {
        currentRoad = pokemonOnRoad8
        roadName.innerHTML = "Road 8"
        mapRoads.src = "stock-img/maps/mapRoad8.png"
    } else if (currentRoad == pokemonOnRoad8) {
        currentRoad = pokemonOnRoad9
        roadName.innerHTML = "Road 9"
        mapRoads.src = "stock-img/maps/mapRoad9.png"
    } else if (currentRoad == pokemonOnRoad9) {
        currentRoad = pokemonOnRoad1
        roadName.innerHTML = "Road 1"
        mapRoads.src = "stock-img/maps/mapRoad1.png"
    } else {
        currentRoad = pokemonOnRoad1
        roadName.innerHTML = "Road 1"
        mapRoads.src = "stock-img/maps/mapRoad1.png"
    }
    sign.prepend(mapRoads)
}


const roadName = document.querySelector(".roadName")
roadName.innerHTML = "Road 1"
const pokedexList = document.querySelector(".pokedexList")


function addToPokedex(pokemon) {
    const addPokemon = document.createElement("li")
    addPokemon.classList.add("pokedexItem")
    pokedexList.prepend(addPokemon)

    const pokemonIMG = document.createElement("img")    
    pokemonIMG.src = `https://img.pokemondb.net/sprites/black-white/normal/${pokemon.alt.toLowerCase()}.png`;
    // Gen 5 https://img.pokemondb.net/sprites/black-white/normal/${pokemon.alt.toLowerCase()}.png             //
    // Gen 8 https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${pokemon.alt.toLowerCase()}.png   //
    // Gif   https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.alt.toLowerCase()}.gif        //
    pokemonIMG.alt = `${pokemon.alt}`
    pokemonIMG.classList.add("pokemonIMG")
    addPokemon.appendChild(pokemonIMG)

    const pokemonTitle = document.createElement("p")
    pokemonTitle.innerHTML = `${pokemon.name}`
    pokemonTitle.classList.add("pokemonTitle")
    addPokemon.appendChild(pokemonTitle)
}





const clickTrainer = document.querySelector(".walkingTrainer");
let stepIndicator = document.querySelector(".stepIndicator");
let totalClick = 0
let stepsBeforeRoadChange = 500


setInterval(() => {
    catchRandom()
}, 10000)

setInterval(() => {
    stepsBeforeRoadChange = stepsBeforeRoadChange - 1
    stepIndicator.innerHTML = (stepsBeforeRoadChange + " step before next road")
    totalClick += 1
    if (stepsBeforeRoadChange === 0) {
        stepsBeforeRoadChange = 500
    }
    if (totalClick % 500 === 0) {
        changeRoad()
    }
}, 1000)


clickTrainer.addEventListener("click", () => {
    totalClick += 1
    stepsBeforeRoadChange = stepsBeforeRoadChange - 1
    stepIndicator.innerHTML = (stepsBeforeRoadChange + " step before next road")
    if (stepsBeforeRoadChange === 0) {
        stepsBeforeRoadChange = 500
    }
    if (totalClick % 10 === 0) {
        catchRandom()
    }
    if (totalClick % 500 === 0) {
        changeRoad()
    }
});

stepIndicator.innerHTML = (stepsBeforeRoadChange + " step before next road")

let isPokemonCaught = document.querySelector(".caughtPokemon");

/*  FUNCTION TO CREATE THE TRACKER OF POKEMON NOT/ALREADY CAUGHT */

for (let i = 0; i < availablePokemons.length; i++) {
    function addToCaughtPokemon(pokemon) {
        const addPokemon = document.createElement("li");
        addPokemon.classList.add("isPokemonCaught");
        isPokemonCaught.appendChild(addPokemon);

        const pokemonIMG = document.createElement("img");
        pokemonIMG.src = `https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${pokemon.alt.toLowerCase()}.png`;
        pokemonIMG.alt = `${pokemon.alt}`;
        pokemonIMG.classList.add("pokemonLittleIMG");
        addPokemon.appendChild(pokemonIMG);
    }
    addToCaughtPokemon(availablePokemons[i]);
}

/* CLICK TO SHOW THE GADDEM MENUUUUUUU */

const pokedexOnOff = document.querySelector(".pokedexIcon")
const pokemonContainer = document.querySelector(".caughtPokemonContainer")

const pokeballOnOff = document.querySelector(".pokeballIcon")
const lastPokemonContainer = document.querySelector(".pokedexContainer")

pokedexOnOff.addEventListener("click", () => {

    if (lastPokemonContainer.classList.contains("show")) {
        lastPokemonContainer.classList.remove("show");
    }
    pokemonContainer.classList.toggle("show")

});

pokeballOnOff.addEventListener("click", () => {

    if (pokemonContainer.classList.contains("show")) {
        pokemonContainer.classList.remove("show");
    }

    lastPokemonContainer.classList.toggle("show")
});

const imgPokeball = document.querySelector('.pokeball');
const walkingTrainer = document.querySelector('.walkingTrainer');

let totalClick1 = 0; // Compteur de clics
let pokeballVisible = false; // Vérifie si la pokeball est déjà affichée

walkingTrainer.addEventListener('click', () => {
    totalClick1++;

    if (totalClick1 >= 10 && !pokeballVisible) {
        showPokeball();
        totalClick1 = 0; // Réinitialise le compteur après l'affichage
    }
});

function showPokeball() {
    imgPokeball.style.display = "block"; // Affiche la pokéball
    imgPokeball.style.opacity = "1";
    imgPokeball.style.transform = "translateY(0)";
    imgPokeball.style.transition = "opacity 0.5s, transform 0.5s";

    pokeballVisible = true; // Indique que la pokeball est affichée

    // Délai de 1 seconde avant de déclencher l'animation de disparition
    setTimeout(() => {
        imgPokeball.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        imgPokeball.style.transform = "translateY(-150px)";
        imgPokeball.style.opacity = "0";
    }, 1000); // Temps avant que l'animation commence

    // Supprime l'élément après l'animation
    setTimeout(() => {
        imgPokeball.style.display = "none";
        pokeballVisible = false; // Permet une nouvelle apparition après 10 clics
    }, 2000); // Temps total de visibilité de la Pokéball (1s d'affichage + 1s d'animation)
}

// Assure que la pokéball est initialement cachée
imgPokeball.style.display = "none";

// Affiche un message d'alerte en cliquant sur les touches directionnelles

const touchElement = document.querySelector(".touch");

touchElement.addEventListener("click", function () {
    alert("Désolé, ça ne fait rien ! Et en plus votre perso fait du monoplace , c'est ridicule !");
});

/* KONAMI CODE MEW */

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const mewFollow = document.querySelector(".walkingMew")
let lastPushedKey = 0

let pushedKey = function (event) {


    if (konamiCode.indexOf(event.key) < 0 || event.key !== konamiCode[lastPushedKey]) {
        lastPushedKey = 0;
        return;
    }

    lastPushedKey += 1

    if (konamiCode.length === lastPushedKey) {
        lastPushedKey = 0;
        mewFollow.style.display = "block"

        const thumb = document.querySelector(".isPokemonCaught img[alt=Mew]")
        thumb.classList.add("caught");
        caughtPokemon.push("Mew")

        window.alert('Oh ! A wild pokemon appears...')
    }
}

document.addEventListener('keydown', pushedKey, false);









// ne pas toucher en dessous        



function saveStorage() {
    localStorage.setItem("pokedexStored", JSON.stringify(caughtPokemon));
}
function loadFromStorage() {
    caughtPokemon = JSON.parse(localStorage.getItem("pokedexStored"));
    caughtPokemon.forEach(element => {
        const wholePokemon = availablePokemons.find((elt) => elt.name === element.name);
    if (wholePokemon) {
        addToPokedex(wholePokemon.alt);
    } else {
        console.warn(`Pokemon not found: ${element.name}`);
    }
    });
}


// window.addEventListener('onclose', saveStorage())

// window.addEventListener('onload', loadFromStorage())

const saveButton = document.querySelector(".saveButton")
const loadButton = document.querySelector(".loadButton")
saveButton.addEventListener("click", function(){
    saveStorage()
});
loadButton.addEventListener("click", function(){
    loadFromStorage()
});
