const availablePokemons = [
    { number: 1, name: "Bulbizarre", alt: "Bulbasaur", rarity: 5  },
    { number: 2, name: "Herbizarre", alt: "Ivysaur", rarity: 5 },
    { number: 3, name: "Florizarre", alt: "Venusaur", rarity: 5 },
    { number: 4, name: "Salamèche", alt: "Charmander", rarity: 5 },
    { number: 5, name: "Reptincel", alt: "Charmeleon", rarity: 5 },
    { number: 6, name: "Dracaufeu", alt: "Charizard", rarity: 5 },
    { number: 7, name: "Carapuce", alt: "Squirtle", rarity: 5 },
    { number: 8, name: "Carabaffe", alt: "Wartortle", rarity: 5 },
    { number: 9, name: "Tortank", alt: "Blastoise", rarity: 5 },
    { number: 10, name: "Chenipan", alt: "Caterpie", rarity: 60 },
    { number: 11, name: "Chrysacier", alt: "Metapod", rarity: 55 },
    { number: 12, name: "Papilusion", alt: "Butterfree", rarity: 20 },
    { number: 13, name: "Aspicot", alt: "Weedle", rarity: 60 },
    { number: 14, name: "Coconfort", alt: "Kakuna", rarity: 55 },
    { number: 15, name: "Dardargnan", alt: "Beedrill", rarity: 20 },
    { number: 16, name: "Roucool", alt: "Pidgey", rarity: 70 },
    { number: 17, name: "Roucoups", alt: "Pidgeotto", rarity: 30 },
    { number: 18, name: "Roucarnage", alt: "Pidgeot", rarity: 20 },
    { number: 19, name: "Rattata", alt: "Rattata", rarity: 70 },
    { number: 20, name: "Rattatac", alt: "Raticate", rarity: 30 },
    { number: 21, name: "Piafabec", alt: "Spearow", rarity: 60 },
    { number: 22, name: "Rapasdepic", alt: "Fearow", rarity: 20 },
    { number: 23, name: "Abo", alt: "Ekans", rarity: 50 },
    { number: 24, name: "Arbok", alt: "Arbok", rarity: 15 },
    { number: 25, name: "Pikachu", alt: "Pikachu", rarity: 5 },
    { number: 26, name: "Raichu", alt: "Raichu", rarity: 10 },
    { number: 27, name: "Sabelette", alt: "Sandshrew", rarity: 50 },
    { number: 28, name: "Sablaireau", alt: "Sandslash", rarity: 20 },
    { number: 29, name: "Nidoran♀", alt: "Nidoran-f", rarity: 50 },
    { number: 30, name: "Nidorina", alt: "Nidorina", rarity: 30 },
    { number: 31, name: "Nidoqueen", alt: "Nidoqueen", rarity: 10 },
    { number: 32, name: "Nidoran♂", alt: "Nidoran-m", rarity: 50 },
    { number: 33, name: "Nidorino", alt: "Nidorino", rarity: 30 },
    { number: 34, name: "Nidoking", alt: "Nidoking", rarity: 10 },
    { number: 35, name: "Mélofée", alt: "Clefairy", rarity: 20 },
    { number: 36, name: "Mélodelfe", alt: "Clefable", rarity: 10 },
    { number: 37, name: "Goupix", alt: "Vulpix", rarity: 50 },
    { number: 38, name: "Feunard", alt: "Ninetales", rarity: 15 },
    { number: 39, name: "Rondoudou", alt: "Jigglypuff", rarity: 40 },
    { number: 40, name: "Grodoudou", alt: "Wigglytuff", rarity: 20 },
    { number: 41, name: "Nosferapti", alt: "Zubat", rarity: 60},
    { number: 42, name: "Nosferalto", alt: "Golbat", rarity: 20 },
    { number: 43, name: "Mystherbe", alt: "Oddish", rarity: 45 },
    { number: 44, name: "Ortide", alt: "Gloom", rarity: 30 },
    { number: 45, name: "Rafflesia", alt: "Vileplume", rarity: 10 },
    { number: 46, name: "Paras", alt: "Paras", rarity: 50 },
    { number: 47, name: "Parasect", alt: "Parasect", rarity: 25 },
    { number: 48, name: "Mimitoss", alt: "Venonat", rarity: 50 },
    { number: 49, name: "Aéromite", alt: "Venomoth", rarity: 25 },
    { number: 50, name: "Taupiqueur", alt: "Diglett", rarity: 50 },
    { number: 51, name: "Triopikeur", alt: "Dugtrio", rarity: 25 },
    { number: 52, name: "Miaouss", alt: "Meowth", rarity: 20 },
    { number: 53, name: "Persian", alt: "Persian", rarity: 10 },
    { number: 54, name: "Psykokwak", alt: "Psyduck", rarity: 40 },
    { number: 55, name: "Akwakwak", alt: "Golduck", rarity: 10 },
    { number: 56, name: "Férosinge", alt: "Mankey", rarity: 20 },
    { number: 57, name: "Colossinge", alt: "Primeape", rarity: 10 },
    { number: 58, name: "Caninos", alt: "Growlithe", rarity: 30 },
    { number: 59, name: "Arcanin", alt: "Arcanine", rarity: 10 },
    { number: 60, name: "Ptitard", alt: "Poliwag", rarity: 55 },
    { number: 61, name: "Têtarte", alt: "Poliwhirl", rarity: 35 },
    { number: 62, name: "Tartard", alt: "Poliwrath", rarity: 10 },
    { number: 63, name: "Abra", alt: "Abra", rarity: 50 },
    { number: 64, name: "Kadabra", alt: "Kadabra", rarity: 30 },
    { number: 65, name: "Alakazam", alt: "Alakazam", rarity: 10 },
    { number: 66, name: "Machoc", alt: "Machop", rarity: 50 },
    { number: 67, name: "Machopeur", alt: "Machoke", rarity: 30 },
    { number: 68, name: "Mackogneur", alt: "Machamp", rarity: 10 },
    { number: 69, name: "Chétiflor", alt: "Bellsprout", rarity: 50 },
    { number: 70, name: "Boustiflor", alt: "Weepinbell", rarity: 30 },
    { number: 71, name: "Empiflor", alt: "Victreebel", rarity: 10 },
    { number: 72, name: "Tentacool", alt: "Tentacool", rarity: 50 },
    { number: 73, name: "Tentacruel", alt: "Tentacruel", rarity: 30 },
    { number: 74, name: "Racaillou", alt: "Geodude", rarity: 50 },
    { number: 75, name: "Gravalanch", alt: "Graveler", rarity: 30 },
    { number: 76, name: "Grolem", alt: "Golem", rarity: 10 },
    { number: 77, name: "Ponyta", alt: "Ponyta", rarity: 40 },
    { number: 78, name: "Galopa", alt: "Rapidash", rarity: 10 },
    { number: 79, name: "Ramoloss", alt: "Slowpoke", rarity: 40 },
    { number: 80, name: "Flagadoss", alt: "Slowbro", rarity: 15 },
    { number: 81, name: "Magnéti", alt: "Magnemite", rarity: 45 },
    { number: 82, name: "Magnéton", alt: "Magneton", rarity: 20 },
    { number: 83, name: "Canarticho", alt: "Farfetchd", rarity: 15 },
    { number: 84, name: "Doduo", alt: "Doduo", rarity: 50 },
    { number: 85, name: "Dodrio", alt: "Dodrio", rarity: 20 },
    { number: 86, name: "Otaria", alt: "Seel", rarity: 50 },
    { number: 87, name: "Lamantine", alt: "Dewgong", rarity: 20 },
    { number: 88, name: "Tadmorv", alt: "Grimer", rarity: 50 },
    { number: 89, name: "Grotadmorv", alt: "Muk", rarity: 30 },
    { number: 90, name: "Kokiyas", alt: "Shellder", rarity: 50 },
    { number: 91, name: "Crustabri", alt: "Cloyster", rarity: 20 },
    { number: 92, name: "Fantominus", alt: "Gastly", rarity: 50 },
    { number: 93, name: "Spectrum", alt: "Haunter", rarity: 30 },
    { number: 94, name: "Ectoplasma", alt: "Gengar", rarity: 10 },
    { number: 95, name: "Onix", alt: "Onix", rarity: 30 },
    { number: 96, name: "Soporifik", alt: "Drowzee", rarity: 45 },
    { number: 97, name: "Hypnomade", alt: "Hypno", rarity: 20 },
    { number: 98, name: "Krabby", alt: "Krabby", rarity: 50 },
    { number: 99, name: "Krabboss", alt: "Kingler", rarity: 20 },
    { number: 100, name: "Voltorbe", alt: "Voltorb", rarity: 50 },
    { number: 101, name: "Électrode", alt: "Electrode", rarity: 20 },
    { number: 102, name: "Noeunoeuf", alt: "Exeggcute", rarity: 50 },
    { number: 103, name: "Noadkoko", alt: "Exeggutor", rarity: 15 },
    { number: 104, name: "Osselait", alt: "Cubone", rarity: 30 },
    { number: 105, name: "Ossatueur", alt: "Marowak", rarity: 10 },
    { number: 106, name: "Kicklee", alt: "Hitmonlee", rarity: 15 },
    { number: 107, name: "Tygnon", alt: "Hitmonchan", rarity: 15 },
    { number: 108, name: "Excelangue", alt: "Lickitung", rarity: 25 },
    { number: 109, name: "Smogo", alt: "Koffing", rarity: 40 },
    { number: 110, name: "Smogogo", alt: "Weezing", rarity: 15 },
    { number: 111, name: "Rhinocorne", alt: "Rhyhorn", rarity: 40 },
    { number: 112, name: "Rhinoféros", alt: "Rhydon", rarity: 20 },
    { number: 113, name: "Leveinard", alt: "Chansey", rarity: 10 },
    { number: 114, name: "Saquedeneu", alt: "Tangela", rarity: 20 },
    { number: 115, name: "Kangourex", alt: "Kangaskhan", rarity: 20 },
    { number: 116, name: "Hypotrempe", alt: "Horsea", rarity: 45 },
    { number: 117, name: "Hypocéan", alt: "Seadra", rarity: 20 },
    { number: 118, name: "Poissirène", alt: "Goldeen", rarity: 45 },
    { number: 119, name: "Poissoroy", alt: "Seaking", rarity: 20 },
    { number: 120, name: "Stari", alt: "Staryu", rarity: 45 },
    { number: 121, name: "Staross", alt: "Starmie", rarity: 20 },
    { number: 122, name: "M. Mime", alt: "Mr-mime", rarity: 15 },
    { number: 123, name: "Insécateur", alt: "Scyther", rarity: 15 },
    { number: 124, name: "Lippoutou", alt: "Jynx", rarity: 20 },
    { number: 125, name: "Élektek", alt: "Electabuzz", rarity: 15 },
    { number: 126, name: "Magmar", alt: "Magmar", rarity: 15 },
    { number: 127, name: "Scarabrute", alt: "Pinsir", rarity: 15 },
    { number: 128, name: "Tauros", alt: "Tauros", rarity:15 },
    { number: 129, name: "Magicarpe", alt: "Magikarp", rarity: 50 },
    { number: 130, name: "Léviator", alt: "Gyarados", rarity: 5 },
    { number: 131, name: "Lokhlass", alt: "Lapras", rarity: 5 },
    { number: 132, name: "Métamorph", alt: "Ditto", rarity: 5 },
    { number: 133, name: "Évoli", alt: "Eevee", rarity: 5 },
    { number: 134, name: "Aquali", alt: "Vaporeon", rarity: 10 },
    { number: 135, name: "Voltali", alt: "Jolteon", rarity: 10 },
    { number: 136, name: "Pyroli", alt: "Flareon", rarity: 10 },
    { number: 137, name: "Porygon", alt: "Porygon", rarity: 10 },
    { number: 138, name: "Amonita", alt: "Omanyte", rarity: 15 },
    { number: 139, name: "Amonistar", alt: "Omastar", rarity: 10 },
    { number: 140, name: "Kabuto", alt: "Kabuto", rarity: 15 },
    { number: 141, name: "Kabutops", alt: "Kabutops", rarity: 10 },
    { number: 142, name: "Ptéra", alt: "Aerodactyl", rarity: 10 },
    { number: 143, name: "Ronflex", alt: "Snorlax", rarity: 5 },
    { number: 144, name: "Artikodin", alt: "Articuno", rarity: 3 },
    { number: 145, name: "Électhor", alt: "Zapdos", rarity: 3 },
    { number: 146, name: "Sulfura", alt: "Moltres", rarity: 3 },
    { number: 147, name: "Minidraco", alt: "Dratini", rarity: 30 },
    { number: 148, name: "Draco", alt: "Dragonair", rarity: 10 },
    { number: 149, name: "Dracolosse", alt: "Dragonite", rarity: 5 },
    { number: 150, name: "Mewtwo", alt: "Mewtwo", rarity: 1 },
    { number: 151, name: "Mew", alt: "Mew", rarity: 0.01 }
];



const pokemonOnRoad1 = [
    availablePokemons[0],
    availablePokemons[3],
    availablePokemons[6],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[132],
]


const pokemonOnRoad2 = [
    availablePokemons[9],
    availablePokemons[12],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[20],
    availablePokemons[28],
    availablePokemons[31],
    availablePokemons[55],
]


const pokemonOnRoad3 = [
    availablePokemons[9],
    availablePokemons[10],
    availablePokemons[11],
    availablePokemons[12],
    availablePokemons[13],
    availablePokemons[14],
    availablePokemons[24],
    availablePokemons[42],
    availablePokemons[43],
    availablePokemons[44],
    availablePokemons[45],
    availablePokemons[46],
    availablePokemons[47],
    availablePokemons[48],
    availablePokemons[82],
    availablePokemons[113],
    availablePokemons[122],
    availablePokemons[126],
];


const pokemonOnRoad4 = [
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[22],
    availablePokemons[26],
    availablePokemons[34],
    availablePokemons[38],
    availablePokemons[40],
    availablePokemons[45],
    availablePokemons[55],
    availablePokemons[73],
    availablePokemons[76],
    availablePokemons[105],
    availablePokemons[106],
    availablePokemons[108],
    availablePokemons[127],
    availablePokemons[128],
];


const pokemonOnRoad5 = [
    availablePokemons[7],
    availablePokemons[9],
    availablePokemons[10],
    availablePokemons[12],
    availablePokemons[13],
    availablePokemons[15],
    availablePokemons[39],
    availablePokemons[40],
    availablePokemons[41],
    availablePokemons[42],
    availablePokemons[53],
    availablePokemons[59],
    availablePokemons[62],
    availablePokemons[68],
    availablePokemons[73],
    availablePokemons[74],
    availablePokemons[83],
    availablePokemons[94],
    availablePokemons[97],
    availablePokemons[107],
    availablePokemons[110],
    availablePokemons[111],
    availablePokemons[112],
    availablePokemons[113],
    availablePokemons[115],
    availablePokemons[116],
    availablePokemons[117],
    availablePokemons[128],
    availablePokemons[130],
    availablePokemons[131],
    availablePokemons[149],
];

const pokemonOnRoad6 = [
    availablePokemons[4],
    availablePokemons[15],
    availablePokemons[16],
    availablePokemons[18],
    availablePokemons[19],
    availablePokemons[24],
    availablePokemons[34],
    availablePokemons[36],
    availablePokemons[37],
    availablePokemons[40],
    availablePokemons[42],
    availablePokemons[43],
    availablePokemons[51],
    availablePokemons[52],
    availablePokemons[57],
    availablePokemons[58],
    availablePokemons[60],
    availablePokemons[61],
    availablePokemons[62],
    availablePokemons[65],
    availablePokemons[66],
    availablePokemons[68],
    availablePokemons[69],
    availablePokemons[73],
    availablePokemons[74],
    availablePokemons[80],
    availablePokemons[81],
    availablePokemons[87],
    availablePokemons[88],
    availablePokemons[95],
    availablePokemons[96],
    availablePokemons[97],
    availablePokemons[99],
    availablePokemons[100],
    availablePokemons[124],
    availablePokemons[134],
    availablePokemons[144],
];

const pokemonOnRoad7 = [
    availablePokemons[1],
    availablePokemons[2],
    availablePokemons[15],  
    availablePokemons[16], 
    availablePokemons[18],  
    availablePokemons[19],
    availablePokemons[21],
    availablePokemons[24],
    availablePokemons[40],   
    availablePokemons[42],  
    availablePokemons[43], 
    availablePokemons[51],  
    availablePokemons[56], 
    availablePokemons[57],  
    availablePokemons[62],
    availablePokemons[63],
    availablePokemons[68],  
    availablePokemons[69],  
    availablePokemons[71],   
    availablePokemons[80],   
    availablePokemons[95],   
    availablePokemons[96],   
    availablePokemons[97],  
    availablePokemons[99],  
    availablePokemons[101],
    availablePokemons[109],
    availablePokemons[115], 
    availablePokemons[117], 
    availablePokemons[128], 
]

const pokemonOnRoad8 = [
    availablePokemons[8],
    availablePokemons[40],   
    availablePokemons[41], 
    availablePokemons[54], 
    availablePokemons[61],
    availablePokemons[71],   
    availablePokemons[72], 
    availablePokemons[73],   
    availablePokemons[74], 
    availablePokemons[79], 
    availablePokemons[85],   
    availablePokemons[86], 
    availablePokemons[89],
    availablePokemons[90],
    availablePokemons[94],  
    availablePokemons[97],   
    availablePokemons[98], 

    availablePokemons[115],  
    availablePokemons[116],  
    availablePokemons[117], 
    availablePokemons[118],  
    availablePokemons[119],  
    availablePokemons[120], 
    availablePokemons[121],
    availablePokemons[125], 
    availablePokemons[128],  
    availablePokemons[129], 
    availablePokemons[130], 
    availablePokemons[133],
    availablePokemons[137],
    availablePokemons[138],
    availablePokemons[139],
    availablePokemons[140],
    availablePokemons[143], 
]

const pokemonOnRoad9 = [
    availablePokemons[5],
    availablePokemons[11],    
    availablePokemons[14],  
    availablePokemons[17],  
    availablePokemons[19],   
    availablePokemons[23],   
    availablePokemons[25],    
    availablePokemons[27],    
    availablePokemons[29],    
    availablePokemons[30],   
    availablePokemons[32],   
    availablePokemons[33],
    availablePokemons[35],    
    availablePokemons[36],    
    availablePokemons[37],    
    availablePokemons[38],    
    availablePokemons[39], 
    availablePokemons[40],   
    availablePokemons[41],
    availablePokemons[46],  
    availablePokemons[49],   
    availablePokemons[50],  
    availablePokemons[64],    
    availablePokemons[67],   
    availablePokemons[66], 
    availablePokemons[70],   
    availablePokemons[71],  
    availablePokemons[72],    
    availablePokemons[73],   
    availablePokemons[74], 
    availablePokemons[75], 
    availablePokemons[77],    
    availablePokemons[79],    
    availablePokemons[81],    
    availablePokemons[84],    
    availablePokemons[86],    
    availablePokemons[88],      
    availablePokemons[94],  
    availablePokemons[95],   
    availablePokemons[96],  
    availablePokemons[65],   
    availablePokemons[91],   
    availablePokemons[92],  
    availablePokemons[93], 
    availablePokemons[100],  
    availablePokemons[102],
    availablePokemons[103],  
    availablePokemons[104], 
    availablePokemons[110], 
    availablePokemons[111],  
    availablePokemons[112],   
    availablePokemons[114],   
    availablePokemons[116],   
    availablePokemons[118],   
    availablePokemons[120], 
    availablePokemons[128], 
    availablePokemons[123], 
    availablePokemons[129], 
    availablePokemons[130],  
    availablePokemons[135], 
    availablePokemons[136], 
    availablePokemons[141], 
    availablePokemons[142], 
    availablePokemons[145],
    availablePokemons[146],
    availablePokemons[147],
    availablePokemons[148],
    availablePokemons[150]
]
let currentRoad = pokemonOnRoad1

/*  --------- RANDOM CATCH + ADD TO POKEDEX  ---------- */

let isPikachuCaught = false
const pikachuSprite = document.querySelector(".walkingPikachu")

let caughtPokemon = []
let caughtPokemonShiny = []

document.title = `P-C (${caughtPokemon.length}/151)`;

function catchRandom() {
    
    let totalRarity = currentRoad.reduce((sum, pokemon) => sum + pokemon.rarity, 0);

    
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

    let isShiny = Math.random() < 0.01; 
    lastCaughtPokemon.isShiny = isShiny;


    addToPokedex(lastCaughtPokemon);

    /* -------- AJOUT PIKACHU -------- */

    if (lastCaughtPokemon.name === "Pikachu" && isPikachuCaught === false) {
        pikachuSprite.style.display = "block"
        isPikachuCaught = true
    }

    /* AJOUT DES POKEMONS DANS LE RADAR ET LE POKEDEX */

    if (!caughtPokemon.includes(lastCaughtPokemon.name)) {
        const thumb = document.querySelector(`.pokemonLittleIMG[alt=${lastCaughtPokemon.alt}]`);
        thumb.classList.add("caught");

        const thumb2 = document.querySelector(`.pokemonRadarLittleIMG[alt=${lastCaughtPokemon.alt}]`);
        thumb2.classList.add("caught");

        caughtPokemon.push(lastCaughtPokemon.name);
        document.title = `P-C (${caughtPokemon.length}/151)`;
    }

    if (lastCaughtPokemon.isShiny === true && !caughtPokemonShiny.includes(lastCaughtPokemon.name)) {
        caughtPokemonShiny.push(lastCaughtPokemon.name);

        const thumb3 = document.querySelector(`.shinyPokemonLittleIMG[alt=${lastCaughtPokemon.alt}]`);
        thumb3.classList.add("caught");
    }
}


/*  --------- MAP + CHANGE ROAD FUNCTION ---------- */


const sign = document.querySelector(".stepSign")
const mapRoads = document.createElement("img")
mapRoads.classList.add("mapRoadsIMG")
mapRoads.src = "stock-img/maps/mapRoad1.png"
sign.prepend(mapRoads)

let pokemonRadar = document.querySelector(".pokemonRadar");

function addToPokemonRadar(pokemon) {
    const addPokemon = document.createElement("li");
    addPokemon.classList.add("pokemonLiRadar");
    pokemonRadar.appendChild(addPokemon);

    const pokemonIMG = document.createElement("img");
    pokemonIMG.src = `https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${pokemon.alt.toLowerCase()}.png`;
    pokemonIMG.alt = `${pokemon.alt}`;
    pokemonIMG.classList.add("pokemonRadarLittleIMG");
    if (caughtPokemon.includes(pokemon.name)) {
        pokemonIMG.classList.add("caught"); 
    }
    addPokemon.appendChild(pokemonIMG);

    
}

function changeRoad() {
    pokemonRadar.innerHTML = ''; 

    if (currentRoad == pokemonOnRoad1) {
        currentRoad = pokemonOnRoad2
        roadName.innerHTML = "Road 2"
        mapRoads.src = "stock-img/maps/mapRoad2.png"

        const uniquePokemonRoad2 = pokemonOnRoad2.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad2.length; i++) {
            addToPokemonRadar(uniquePokemonRoad2[i]);
        }

    } else if (currentRoad == pokemonOnRoad2) {
        currentRoad = pokemonOnRoad3
        roadName.innerHTML = "Road 3"
        mapRoads.src = "stock-img/maps/mapRoad3.png"

        const uniquePokemonRoad3 = pokemonOnRoad3.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad3.length; i++) {
            addToPokemonRadar(uniquePokemonRoad3[i]);
        }

    } else if (currentRoad == pokemonOnRoad3) {
        currentRoad = pokemonOnRoad4
        roadName.innerHTML = "Road 4"
        mapRoads.src = "stock-img/maps/mapRoad4.png"

        const uniquePokemonRoad4 = pokemonOnRoad4.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad4.length; i++) {
            addToPokemonRadar(uniquePokemonRoad4[i]);
        }

    } else if (currentRoad == pokemonOnRoad4) {
        currentRoad = pokemonOnRoad5
        roadName.innerHTML = "Road 5"
        mapRoads.src = "stock-img/maps/mapRoad5.png"

        const uniquePokemonRoad5 = pokemonOnRoad5.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad5.length; i++) {
            addToPokemonRadar(uniquePokemonRoad5[i]);
        }

    } else if (currentRoad == pokemonOnRoad5) {
        currentRoad = pokemonOnRoad6
        roadName.innerHTML = "Road 6"
        mapRoads.src = "stock-img/maps/mapRoad6.png"

        const uniquePokemonRoad6 = pokemonOnRoad6.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad6.length; i++) {
            addToPokemonRadar(uniquePokemonRoad6[i]);
        }

    } else if (currentRoad == pokemonOnRoad6) {
        currentRoad = pokemonOnRoad7
        roadName.innerHTML = "Road 7"
        mapRoads.src = "stock-img/maps/mapRoad7.png"

        const uniquePokemonRoad7 = pokemonOnRoad7.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad7.length; i++) {
            addToPokemonRadar(uniquePokemonRoad7[i]);
        }

    } else if (currentRoad == pokemonOnRoad7) {
        currentRoad = pokemonOnRoad8
        roadName.innerHTML = "Road 8"
        mapRoads.src = "stock-img/maps/mapRoad8.png"

        const uniquePokemonRoad8 = pokemonOnRoad8.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad8.length; i++) {
            addToPokemonRadar(uniquePokemonRoad8[i]);
        }

    } else if (currentRoad == pokemonOnRoad8) {
        currentRoad = pokemonOnRoad9
        roadName.innerHTML = "Road 9"
        mapRoads.src = "stock-img/maps/mapRoad9.png"

        const uniquePokemonRoad9 = pokemonOnRoad9.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad9.length; i++) {
            addToPokemonRadar(uniquePokemonRoad9[i]);
        }

    } else if (currentRoad == pokemonOnRoad9) {
        currentRoad = pokemonOnRoad1
        roadName.innerHTML = "Road 1"
        mapRoads.src = "stock-img/maps/mapRoad1.png"

        const uniquePokemonRoad1 = pokemonOnRoad1.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad1.length; i++) {
            addToPokemonRadar(uniquePokemonRoad1[i]);
        }

    } else {
        currentRoad = pokemonOnRoad1
        roadName.innerHTML = "Road 1"
        mapRoads.src = "stock-img/maps/mapRoad1.png"

        const uniquePokemonRoad1 = pokemonOnRoad1.filter((value, index, self) => self.indexOf(value) === index);
        for (let i = 0; i < uniquePokemonRoad1.length; i++) {
            addToPokemonRadar(uniquePokemonRoad1[i]);
        }
    }
    sign.prepend(mapRoads)
}

const uniquePokemonRoad1 = pokemonOnRoad1.filter((value, index, self) => self.indexOf(value) === index);
for (let i = 0; i < uniquePokemonRoad1.length; i++) {
    addToPokemonRadar(uniquePokemonRoad1[i]);
}

const roadName = document.querySelector(".roadName")
roadName.innerHTML = "Road 1"


/*  --------- ADD TO LAST CATCH TRACKER ---------- */

const pokedexList = document.querySelector(".pokedexList")

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
let totalClick = 0
let stepsBeforeRoadChange = 500


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
        stepIndicator.innerHTML = (stepsBeforeRoadChange + " step before next road");
        totalClick += 1;
        if (stepsBeforeRoadChange === 0) {
            stepsBeforeRoadChange = 500;
        }
        if (totalClick % 500 === 0) {
            changeRoad();
        }
        stepAccumulator -= stepInterval;
    }

    while (catchAccumulator >= catchInterval) {
        catchRandom();
        catchAccumulator -= catchInterval;
    }

    document.title = `P-C (${caughtPokemon.length}/151)`

    requestAnimationFrame(update);
}

requestAnimationFrame(update);


/*  --------- CLICK TRACKER + BASED ON EVENT ---------- */

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

/* ------ FUNCTION TO CREATE THE TRACKER OF POKEMON NOT CAUGHT------- */

let isPokemonCaught = document.querySelector(".caughtPokemon");
let isShinyPokemonCaught = document.querySelector(".shinyCaughtPokemon")

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

const pokedexOnOff = document.querySelector(".pokedexIcon")
const pokemonContainer = document.querySelector(".caughtPokemonContainer")

const pokeballOnOff = document.querySelector(".pokeballIcon")
const lastPokemonContainer = document.querySelector(".pokedexContainer")

const radarOnOff = document.querySelector(".compass")
const radarContainer = document.querySelector(".pokemonRadarContainer")

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

radarOnOff.addEventListener("click", () => {

    radarContainer.classList.toggle("show")
});


const shinyOnOff = document.querySelector(".shinyIcon")
const pokedexDisplay = document.querySelector(".caughtPokemon")
const shinyDisplay = document.querySelector(".shinyCaughtPokemon")
let normalPokedexDisplaying = true;

shinyOnOff.addEventListener("click", () => {

    if (normalPokedexDisplaying === true) {
        pokedexDisplay.style.display = "none"
        shinyDisplay.style.display = "flex"
        shinyOnOff.classList.add("on")
        normalPokedexDisplaying = false
    }
    else if (normalPokedexDisplaying === false) {
        pokedexDisplay.style.display = "flex"
        shinyDisplay.style.display = "none"
        shinyOnOff.classList.remove("on")
        normalPokedexDisplaying = true
    }
});
         



/* -------------------POKEBALL POPUP--------------- */

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

/* ----------------KONAMI CODE MEW----------------------- */

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






