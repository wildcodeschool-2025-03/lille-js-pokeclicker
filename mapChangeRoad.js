/*  --------- MAP + CHANGE ROAD FUNCTION ---------- */

const itemList = [
	{ name: "Shiny Charm", rarity: 20 },
	{ name: "Lentil Scop", rarity: 35 },
	{ name: "Spray Duck", rarity: 35 },
	{ name: "Mew Finder", rarity: 10 },
]

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
	pokemonIMG.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokemon.alt.toLowerCase()}.png`;
	// https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokemon.alt.toLowerCase()}.png
	// https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${pokemon.alt.toLowerCase()}.png
	pokemonIMG.alt = `${pokemon.alt}`;
	pokemonIMG.classList.add("pokemonRadarLittleIMG");

	if (caughtPokemon.some(caught => caught.name === pokemon.name)) {
		pokemonIMG.classList.add("caught");
	}
	else if (caughtPokemonGen2.some(caught => caught.name === pokemon.name)) {
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
		currentRoad = pokemonOnRoadJohto1;
		roadName.innerHTML = "Road 1 Johto";
		mapRoads.src = "stock-img/maps/mapJohto1.png";


		const uniquePokemonRoadJohto1 = pokemonOnRoadJohto1.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto1.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto1[i]);
		}


		let availableItems = itemList.filter(item => {
			if (item.name === "Shiny Charm" && shinyCharm.style.display === "block") {
				return false; 
			}
			if (item.name === "Lentil Scop" && lentilScop.style.display === "block") {
				return false; 
			}
			if (item.name === "Spray Duck" && sprayDuck.style.display === "block") {
				return false; 
			}
			if (item.name === "Mew Finder" && mewFinder.style.display === "block") {
				return false; 
			}
			return true; 
		});
		

		let totalRarity = availableItems.reduce(
			(sum, item) => sum + item.rarity,
			0
		);

		let random = Math.random() * totalRarity;
		let itemSelected;
		let cumulativeRarity = 0;
		for (let i = 0; i < availableItems.length; i++) {
			cumulativeRarity += availableItems[i].rarity;
			if (random < cumulativeRarity) {
				itemSelected = availableItems[i];
				break;
			}
		}

		if (itemSelected.name === "Shiny Charm") {
			shinyCharm.style.display = "block";
		}
		if (itemSelected.name === "Lentil Scop") {
			lentilScop.style.display = "block";
		}
		if (itemSelected.name === "Spray Duck") {
			sprayDuck.style.display = "block";
		}
		if (itemSelected.name === "Mew Finder") {
			mewFinder.style.display = "block";
		}



	} else if (currentRoad == pokemonOnRoadJohto1) {
		currentRoad = pokemonOnRoadJohto2;
		roadName.innerHTML = "Road 2 Johto";
		mapRoads.src = "stock-img/maps/mapJohto2.png";


		const uniquePokemonRoadJohto2 = pokemonOnRoadJohto2.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto2.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto2[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto2) {
		currentRoad = pokemonOnRoadJohto3;
		roadName.innerHTML = "Road 3 Johto";
		mapRoads.src = "stock-img/maps/mapJohto3.png";


		const uniquePokemonRoadJohto3 = pokemonOnRoadJohto3.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto3.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto3[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto3) {
		currentRoad = pokemonOnRoadJohto4;
		roadName.innerHTML = "Road 4 Johto";
		mapRoads.src = "stock-img/maps/mapJohto4.png";


		const uniquePokemonRoadJohto4 = pokemonOnRoadJohto4.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto4.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto4[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto4) {
		currentRoad = pokemonOnRoadJohto5;
		roadName.innerHTML = "Road 5 Johto";
		mapRoads.src = "stock-img/maps/mapJohto5.png";


		const uniquePokemonRoadJohto5 = pokemonOnRoadJohto5.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto5.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto5[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto5) {
		currentRoad = pokemonOnRoadJohto6;
		roadName.innerHTML = "Road 6 Johto";
		mapRoads.src = "stock-img/maps/mapJohto6.png";


		const uniquePokemonRoadJohto6 = pokemonOnRoadJohto6.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto6.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto6[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto6) {
		currentRoad = pokemonOnRoadJohto7;
		roadName.innerHTML = "Road 7 Johto";
		mapRoads.src = "stock-img/maps/mapJohto7.png";


		const uniquePokemonRoadJohto7 = pokemonOnRoadJohto7.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto7.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto7[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto7) {
		currentRoad = pokemonOnRoadJohto8;
		roadName.innerHTML = "Road 8 Johto";
		mapRoads.src = "stock-img/maps/mapJohto8.png";


		const uniquePokemonRoadJohto8 = pokemonOnRoadJohto8.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto8.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto8[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto8) {
		currentRoad = pokemonOnRoadJohto9;
		roadName.innerHTML = "Road 9 Johto";
		mapRoads.src = "stock-img/maps/mapJohto9.png";


		const uniquePokemonRoadJohto9 = pokemonOnRoadJohto9.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoadJohto9.length; i++) {
			addToPokemonRadar(uniquePokemonRoadJohto9[i]);
		}
	} else if (currentRoad == pokemonOnRoadJohto9) {
		currentRoad = pokemonOnRoad1;
		roadName.innerHTML = "Road 1";
		mapRoads.src = "stock-img/maps/mapRoad1.png";


		const uniquePokemonRoad1 = pokemonOnRoad1.filter(
			(value, index, self) => self.indexOf(value) === index,
		);
		for (let i = 0; i < uniquePokemonRoad1.length; i++) {
			addToPokemonRadar(uniquePokemonRoad1[i]);
		}

		let availableItems = itemList.filter(item => {
			if (item.name === "Shiny Charm" && shinyCharm.style.display === "block") {
				return false; 
			}
			if (item.name === "Lentil Scop" && lentilScop.style.display === "block") {
				return false; 
			}
			if (item.name === "Spray Duck" && sprayDuck.style.display === "block") {
				return false; 
			}
			if (item.name === "Mew Finder" && mewFinder.style.display === "block") {
				return false; 
			}
			return true; 
		});
		

		let totalRarity = availableItems.reduce(
			(sum, item) => sum + item.rarity,
			0
		);

		let random = Math.random() * totalRarity;
		let itemSelected;
		let cumulativeRarity = 0;
		for (let i = 0; i < availableItems.length; i++) {
			cumulativeRarity += availableItems[i].rarity;
			if (random < cumulativeRarity) {
				itemSelected = availableItems[i];
				break;
			}
		}
		if (itemSelected.name === "Shiny Charm") {
			shinyCharm.style.display = "block";
		}
		if (itemSelected.name === "Lentil Scop") {
			lentilScop.style.display = "block";
		}
		if (itemSelected.name === "Spray Duck") {
			sprayDuck.style.display = "block";
		}if (itemSelected.name === "Mew Finder") {
			mewFinder.style.display = "block";
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
