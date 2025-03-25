let currentRoad = pokemonOnRoad1;

let shinySound = new Audio("sounds/shinySoundEffect.mp3")

/*  --------- RANDOM CATCH + ADD TO POKEDEX ---------- */
let isShinyCharmOn = false
let isPikachuCaught = false;
let isMewCaught = false;
const pikachuSprite = document.querySelector(".walkingPikachu");
const mewFollow2 = document.querySelector(".walkingMew");

let caughtPokemon = [];
let caughtPokemonShiny = [];

document.title = `P-C (${caughtPokemon.length}/151)`;

function catchRandom() {
	let totalRarity = currentRoad.reduce(
		(sum, pokemon) => sum + pokemon.rarity,
		0,
	);

	let random = Math.random() * totalRarity;

	let cumulativeRarity = 0;
	let lastCaughtPokemon;
	for (let i = 0; i < currentRoad.length; i++) {
		cumulativeRarity += currentRoad[i].rarity;
		if (random < cumulativeRarity) {
			lastCaughtPokemon = currentRoad[i];
			break;
		}
	}

	if (isShinyCharmOn === true) {
		isShiny = Math.random() < 0.15;
	}


	else {
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
		shinySound.play()

		const thumb3 = document.querySelector(
			`.shinyPokemonLittleIMG[alt=${lastCaughtPokemon.alt}]`,
		);
		thumb3.classList.add("caught");
	}
}

/*  --------- MAP + CHANGE ROAD FUNCTION ---------- */

const sign = document.querySelector(".stepSign");
const mapRoads = document.createElement("img");
mapRoads.classList.add("mapRoadsIMG");
mapRoads.src = "stock-img/maps/mapRoad1.png";
sign.prepend(mapRoads);

let pokemonRadar = document.querySelector(".pokemonRadar");

function addToPokemonRadar(pokemon) {
	const addPokemon = document.createElement("li");
	addPokemon.classList.add("pokemonLiRadar");
	pokemonRadar.appendChild(addPokemon);

	const pokemonIMG = document.createElement("img");
	pokemonIMG.src = `https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${pokemon.alt.toLowerCase()}.png`;
	pokemonIMG.alt = `${pokemon.alt}`;
	pokemonIMG.classList.add("pokemonRadarLittleIMG");
	if (caughtPokemon.some(caught => caught.name === pokemon.name)) {
		pokemonIMG.classList.add("caught");
	}
	addPokemon.appendChild(pokemonIMG);
}

function changeRoad() {
	pokemonRadar.innerHTML = "";

	if (currentRoad == pokemonOnRoad1) {
		currentRoad = pokemonOnRoad2;
		roadName.innerHTML = "Road 2";
		mapRoads.src = "stock-img/maps/mapRoad2.png";

		const uniquePokemonRoad2 = pokemonOnRoad2.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad2.length; i++) {
			addToPokemonRadar(uniquePokemonRoad2[i]);
		}
	} else if (currentRoad == pokemonOnRoad2) {
		currentRoad = pokemonOnRoad3;
		roadName.innerHTML = "Road 3";
		mapRoads.src = "stock-img/maps/mapRoad3.png";

		const uniquePokemonRoad3 = pokemonOnRoad3.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad3.length; i++) {
			addToPokemonRadar(uniquePokemonRoad3[i]);
		}
	} else if (currentRoad == pokemonOnRoad3) {
		currentRoad = pokemonOnRoad4;
		roadName.innerHTML = "Road 4";
		mapRoads.src = "stock-img/maps/mapRoad4.png";

		const uniquePokemonRoad4 = pokemonOnRoad4.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad4.length; i++) {
			addToPokemonRadar(uniquePokemonRoad4[i]);
		}
	} else if (currentRoad == pokemonOnRoad4) {
		currentRoad = pokemonOnRoad5;
		roadName.innerHTML = "Road 5";
		mapRoads.src = "stock-img/maps/mapRoad5.png";

		const uniquePokemonRoad5 = pokemonOnRoad5.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad5.length; i++) {
			addToPokemonRadar(uniquePokemonRoad5[i]);
		}
	} else if (currentRoad == pokemonOnRoad5) {
		currentRoad = pokemonOnRoad6;
		roadName.innerHTML = "Road 6";
		mapRoads.src = "stock-img/maps/mapRoad6.png";

		const uniquePokemonRoad6 = pokemonOnRoad6.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad6.length; i++) {
			addToPokemonRadar(uniquePokemonRoad6[i]);
		}
	} else if (currentRoad == pokemonOnRoad6) {
		currentRoad = pokemonOnRoad7;
		roadName.innerHTML = "Road 7";
		mapRoads.src = "stock-img/maps/mapRoad7.png";

		const uniquePokemonRoad7 = pokemonOnRoad7.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad7.length; i++) {
			addToPokemonRadar(uniquePokemonRoad7[i]);
		}
	} else if (currentRoad == pokemonOnRoad7) {
		currentRoad = pokemonOnRoad8;
		roadName.innerHTML = "Road 8";
		mapRoads.src = "stock-img/maps/mapRoad8.png";

		const uniquePokemonRoad8 = pokemonOnRoad8.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad8.length; i++) {
			addToPokemonRadar(uniquePokemonRoad8[i]);
		}
	} else if (currentRoad == pokemonOnRoad8) {
		currentRoad = pokemonOnRoad9;
		roadName.innerHTML = "Road 9";
		mapRoads.src = "stock-img/maps/mapRoad9.png";

		const uniquePokemonRoad9 = pokemonOnRoad9.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad9.length; i++) {
			addToPokemonRadar(uniquePokemonRoad9[i]);
		}
	} else if (currentRoad == pokemonOnRoad9) {
		currentRoad = pokemonOnRoad1;
		roadName.innerHTML = "Road 1";
		mapRoads.src = "stock-img/maps/mapRoad1.png";

		const uniquePokemonRoad1 = pokemonOnRoad1.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad1.length; i++) {
			addToPokemonRadar(uniquePokemonRoad1[i]);
		}
	} else {
		currentRoad = pokemonOnRoad1;
		roadName.innerHTML = "Road 1";
		mapRoads.src = "stock-img/maps/mapRoad1.png";

		const uniquePokemonRoad1 = pokemonOnRoad1.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad1.length; i++) {
			addToPokemonRadar(uniquePokemonRoad1[i]);
		}
	}
	sign.prepend(mapRoads);
}

const uniquePokemonRoad1 = pokemonOnRoad1.filter(
	(value, index, self) => self.indexOf(value) === index,
);
for (let i = 0; i < uniquePokemonRoad1.length; i++) {
	addToPokemonRadar(uniquePokemonRoad1[i]);
}

const roadName = document.querySelector(".roadName");
roadName.innerHTML = "Road 1";

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

/*  --------- VAR NEEDED FOR CLICK AND TIME TRACKER ---------- */

const clickTrainer = document.querySelector(".walkingTrainer");
let stepIndicator = document.querySelector(".stepIndicator");
let totalClick = 0;
let stepsBeforeRoadChange = 500;

/*  --------- TIME TRACKER + BASED ON EVENT ---------- */

let lastTime = performance.now();
let stepInterval = 1000;
let catchInterval = 10000;
let stepAccumulator = 0;
let catchAccumulator = 0;

function update(time) {
	let deltaTime = time - lastTime;
	lastTime = time;

	stepAccumulator += deltaTime;
	catchAccumulator += deltaTime;

	while (stepAccumulator >= stepInterval) {
		stepsBeforeRoadChange -= 1;
		stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
		totalClick += 1;
		if (stepsBeforeRoadChange === 0) {
			stepsBeforeRoadChange = 500;
		}
		if (totalClick % 500 === 0) {
			changeRoad();
		}
		if (totalClick % 10000 === 0) {
			shinyCharm.style.display = "block"
		}

		stepAccumulator -= stepInterval;
	}

	while (catchAccumulator >= catchInterval) {
		catchRandom();
		catchAccumulator -= catchInterval;
	}

	document.title = `P-C (${caughtPokemon.length}/151)`;

	requestAnimationFrame(update);
}

requestAnimationFrame(update);

/*  --------- CLICK TRACKER + BASED ON EVENT ---------- */

clickTrainer.addEventListener("click", () => {
	totalClick += 1;
	stepsBeforeRoadChange = stepsBeforeRoadChange - 1;
	// biome-ignore lint/style/useTemplate: <explanation>
	stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";
	if (stepsBeforeRoadChange === 0) {
		stepsBeforeRoadChange = 500;
	}
	if (totalClick % 10 === 0) {
		catchRandom();
	}
	if (totalClick % 500 === 0) {
		changeRoad();
	}
	if (totalClick % 10000 === 0) {
		shinyCharm.style.display = "block"
	}
});

// biome-ignore lint/style/useTemplate: <explanation>
stepIndicator.innerHTML = stepsBeforeRoadChange + " step before next road";

/* ------ FUNCTION TO CREATE THE TRACKER OF POKEMON NOT CAUGHT------- */

const isPokemonCaught = document.querySelector(".caughtPokemon");
const isShinyPokemonCaught = document.querySelector(".shinyCaughtPokemon");

for (let i = 0; i < availablePokemons.length; i++) {
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
	pokemonContainer.classList.toggle("show");
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
const pokedexDisplay = document.querySelector(".caughtPokemon");
const shinyDisplay = document.querySelector(".shinyCaughtPokemon");
let normalPokedexDisplaying = true;

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

/* -------------------POKEBALL POPUP--------------- */

const imgPokeball = document.querySelector(".pokeball");
const walkingTrainer = document.querySelector(".walkingTrainer");

let totalClick1 = 0; // Compteur de clics
let pokeballVisible = false; // Vérifie si la pokeball est déjà affichée

walkingTrainer.addEventListener("click", () => {
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
		imgPokeball.style.transition =
			"transform 0.5s ease-out, opacity 0.5s ease-out";
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

touchElement.addEventListener("click", () => {
	alert(
		"Désolé, ça ne fait rien ! Et en plus votre perso fait du monoplace , c'est ridicule !",
	);
});

/* ----------------KONAMI CODE MEW----------------------- */

const konamiCode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];
const mewFollow = document.querySelector(".walkingMew");
let lastPushedKey = 0;

const pushedKey = (event) => {
	if (
		konamiCode.indexOf(event.key) < 0 ||
		event.key !== konamiCode[lastPushedKey]
	) {
		lastPushedKey = 0;
		return;
	}

	lastPushedKey += 1;

	if (konamiCode.length === lastPushedKey) {
		lastPushedKey = 0;
		mewFollow.style.display = "block";

		const thumb = document.querySelector(".isPokemonCaught img[alt=Mew]");
		thumb.classList.add("caught");
		caughtPokemon.push(availablePokemons[150]);

		window.alert("Oh ! A wild pokemon appears...");
	}
};

document.addEventListener("keydown", pushedKey, false);

/*--------------------- SWITCH BOY/GIRL TRAINER ---------------------*/

const actualTrainer = document.querySelector(".walkingSprite");
const switchTrainer = document.querySelector(".trainerSwitch");
let isGirlTrainer = false;

switchTrainer.addEventListener("click", () => {
	if (isGirlTrainer === false) {
		actualTrainer.src = "stock-img/trainer/trainergirl.png";
		switchTrainer.src = "stock-img/trainer/trainer_01.png";
		isGirlTrainer = true;
	} else if (isGirlTrainer === true) {
		actualTrainer.src = "stock-img/trainer/trainerallsprite.png";
		switchTrainer.src = "stock-img/trainer/trainergirlface_01.png";
		isGirlTrainer = false;
	}
});

// ------------SAVE AND LOAD--------------- //

let caughtPokemonSaved = [];
let caughtPokemonShinySaved = [];

function saveStorage() {
	localStorage.setItem("pokedexStored", JSON.stringify(caughtPokemon));
	localStorage.setItem(
		"pokedexShinyStored",
		JSON.stringify(caughtPokemonShiny),
	);
}
function loadFromStorage() {
	const caughtPokemonSaved = JSON.parse(localStorage.getItem("pokedexStored"));
	const caughtPokemonShinySaved = JSON.parse(
		localStorage.getItem("pokedexShinyStored"),
	);
	console.log(caughtPokemonSaved);

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

const shinyCharm = document.querySelector(".shinyCharm")


shinyCharm.addEventListener("click", () => {
	isShinyCharmOn = true
	setTimeout(() => {
		isShinyCharmOn = false
	}, 60000);
	shinyCharm.style.display = "none"
})

const musicButton = document.querySelector(".musicButton")
const backgroundMusic = document.querySelector("audio")
musicButton.addEventListener("click", () => {
	if (musicButton.src == "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7u-933d7f26-3de9-44d4-a119-61eea658e033.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dS05MzNkN2YyNi0zZGU5LTQ0ZDQtYTExOS02MWVlYTY1OGUwMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXXSjgtNsqwIljKwyX_Q1HYFS5jagY0FhFuNDYh36h4") {
		musicButton.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7t-64571c15-4b63-4e09-8dc6-54145b532ad4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dC02NDU3MWMxNS00YjYzLTRlMDktOGRjNi01NDE0NWI1MzJhZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WMhmwMen_UG38_nqeRj6eHdqYBnXv0eTtp7lheRxpKA"
		backgroundMusic.volume = 0.2;
    	backgroundMusic.play();
	}else if (musicButton.src == "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7t-64571c15-4b63-4e09-8dc6-54145b532ad4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dC02NDU3MWMxNS00YjYzLTRlMDktOGRjNi01NDE0NWI1MzJhZDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WMhmwMen_UG38_nqeRj6eHdqYBnXv0eTtp7lheRxpKA"){
		musicButton.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37817d49-a5a5-4ae6-9128-16049f4d1f18/df0qv7u-933d7f26-3de9-44d4-a119-61eea658e033.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ODE3ZDQ5LWE1YTUtNGFlNi05MTI4LTE2MDQ5ZjRkMWYxOFwvZGYwcXY3dS05MzNkN2YyNi0zZGU5LTQ0ZDQtYTExOS02MWVlYTY1OGUwMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXXSjgtNsqwIljKwyX_Q1HYFS5jagY0FhFuNDYh36h4"
		backgroundMusic.volume = 0;
		backgroundMusic.pause();
	}
});

