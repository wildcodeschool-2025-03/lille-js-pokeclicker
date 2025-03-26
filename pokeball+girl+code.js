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