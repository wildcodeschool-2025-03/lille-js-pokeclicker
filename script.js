const availablePokemons = [
    { number: 1, name: "Bulbizarre", alt: "Bulbasaur" },
    { number: 2, name: "Herbizarre", alt: "Ivysaur" },
    { number: 3, name: "Florizarre", alt: "Venusaur" },
    { number: 4, name: "Salamèche", alt: "Charmander" },
    { number: 5, name: "Reptincel", alt: "Charmeleon" },
    { number: 6, name: "Dracaufeu", alt: "Charizard" },
    { number: 7, name: "Carapuce", alt: "Squirtle" },
    { number: 8, name: "Carabaffe", alt: "Wartortle" },
    { number: 9, name: "Tortank", alt: "Blastoise" },
    { number: 10, name: "Chenipan", alt: "Caterpie" },
    { number: 11, name: "Chrysacier", alt: "Metapod" },
    { number: 12, name: "Papilusion", alt: "Butterfree" },
    { number: 13, name: "Aspicot", alt: "Weedle" },
    { number: 14, name: "Coconfort", alt: "Kakuna" },
    { number: 15, name: "Dardargnan", alt: "Beedrill" },
    { number: 16, name: "Roucool", alt: "Pidgey" },
    { number: 17, name: "Roucoups", alt: "Pidgeotto" },
    { number: 18, name: "Roucarnage", alt: "Pidgeot" },
    { number: 19, name: "Rattata", alt: "Rattata" },
    { number: 20, name: "Rattatac", alt: "Raticate" },
    { number: 21, name: "Piafabec", alt: "Spearow" },
    { number: 22, name: "Rapasdepic", alt: "Fearow" },
    { number: 23, name: "Abo", alt: "Ekans" },
    { number: 24, name: "Arbok", alt: "Arbok" },
    { number: 25, name: "Pikachu", alt: "Pikachu" },
    { number: 26, name: "Raichu", alt: "Raichu" },
    { number: 27, name: "Sabelette", alt: "Sandshrew" },
    { number: 28, name: "Sablaireau", alt: "Sandslash" },
    { number: 29, name: "Nidoran♀", alt: "Nidoran-f" },
    { number: 30, name: "Nidorina", alt: "Nidorina" },
    { number: 31, name: "Nidoqueen", alt: "Nidoqueen" },
    { number: 32, name: "Nidoran♂", alt: "Nidoran-m" },
    { number: 33, name: "Nidorino", alt: "Nidorino" },
    { number: 34, name: "Nidoking", alt: "Nidoking" },
    { number: 35, name: "Mélofée", alt: "Clefairy" },
    { number: 36, name: "Mélodelfe", alt: "Clefable" },
    { number: 37, name: "Goupix", alt: "Vulpix" },
    { number: 38, name: "Feunard", alt: "Ninetales" },
    { number: 39, name: "Rondoudou", alt: "Jigglypuff" },
    { number: 40, name: "Grodoudou", alt: "Wigglytuff" },
    { number: 41, name: "Nosferapti", alt: "Zubat" },
    { number: 42, name: "Nosferalto", alt: "Golbat" },
    { number: 43, name: "Mystherbe", alt: "Oddish" },
    { number: 44, name: "Ortide", alt: "Gloom" },
    { number: 45, name: "Rafflesia", alt: "Vileplume" },
    { number: 46, name: "Paras", alt: "Paras" },
    { number: 47, name: "Parasect", alt: "Parasect" },
    { number: 48, name: "Mimitoss", alt: "Venonat" },
    { number: 49, name: "Aéromite", alt: "Venomoth" },
    { number: 50, name: "Taupiqueur", alt: "Diglett" },
    { number: 51, name: "Triopikeur", alt: "Dugtrio" },
    { number: 52, name: "Miaouss", alt: "Meowth" },
    { number: 53, name: "Persian", alt: "Persian" },
    { number: 54, name: "Psykokwak", alt: "Psyduck" },
    { number: 55, name: "Akwakwak", alt: "Golduck" },
    { number: 56, name: "Férosinge", alt: "Mankey" },
    { number: 57, name: "Colossinge", alt: "Primeape" },
    { number: 58, name: "Caninos", alt: "Growlithe" },
    { number: 59, name: "Arcanin", alt: "Arcanine" },
    { number: 60, name: "Ptitard", alt: "Poliwag" },
    { number: 61, name: "Têtarte", alt: "Poliwhirl" },
    { number: 62, name: "Tartard", alt: "Poliwrath" },
    { number: 63, name: "Abra", alt: "Abra" },
    { number: 64, name: "Kadabra", alt: "Kadabra" },
    { number: 65, name: "Alakazam", alt: "Alakazam" },
    { number: 66, name: "Machoc", alt: "Machop" },
    { number: 67, name: "Machopeur", alt: "Machoke" },
    { number: 68, name: "Mackogneur", alt: "Machamp" },
    { number: 69, name: "Chétiflor", alt: "Bellsprout" },
    { number: 70, name: "Boustiflor", alt: "Weepinbell" },
    { number: 71, name: "Empiflor", alt: "Victreebel" },
    { number: 72, name: "Tentacool", alt: "Tentacool" },
    { number: 73, name: "Tentacruel", alt: "Tentacruel" },
    { number: 74, name: "Racaillou", alt: "Geodude" },
    { number: 75, name: "Gravalanch", alt: "Graveler" },
    { number: 76, name: "Grolem", alt: "Golem" },
    { number: 77, name: "Ponyta", alt: "Ponyta" },
    { number: 78, name: "Galopa", alt: "Rapidash" },
    { number: 79, name: "Ramoloss", alt: "Slowpoke" },
    { number: 80, name: "Flagadoss", alt: "Slowbro" },
    { number: 81, name: "Magnéti", alt: "Magnemite" },
    { number: 82, name: "Magnéton", alt: "Magneton" },
    { number: 83, name: "Canarticho", alt: "Farfetchd" },
    { number: 84, name: "Doduo", alt: "Doduo" },
    { number: 85, name: "Dodrio", alt: "Dodrio" },
    { number: 86, name: "Otaria", alt: "Seel" },
    { number: 87, name: "Lamantine", alt: "Dewgong" },
    { number: 88, name: "Tadmorv", alt: "Grimer" },
    { number: 89, name: "Grotadmorv", alt: "Muk" },
    { number: 90, name: "Kokiyas", alt: "Shellder" },
    { number: 91, name: "Crustabri", alt: "Cloyster" },
    { number: 92, name: "Fantominus", alt: "Gastly" },
    { number: 93, name: "Spectrum", alt: "Haunter" },
    { number: 94, name: "Ectoplasma", alt: "Gengar" },
    { number: 95, name: "Onix", alt: "Onix" },
    { number: 96, name: "Soporifik", alt: "Drowzee" },
    { number: 97, name: "Hypnomade", alt: "Hypno" },
    { number: 98, name: "Krabby", alt: "Krabby" },
    { number: 99, name: "Krabboss", alt: "Kingler" },
    { number: 100, name: "Voltorbe", alt: "Voltorb" },
    { number: 101, name: "Électrode", alt: "Electrode" },
    { number: 102, name: "Noeunoeuf", alt: "Exeggcute" },
    { number: 103, name: "Noadkoko", alt: "Exeggutor" },
    { number: 104, name: "Osselait", alt: "Cubone" },
    { number: 105, name: "Ossatueur", alt: "Marowak" },
    { number: 106, name: "Kicklee", alt: "Hitmonlee" },
    { number: 107, name: "Tygnon", alt: "Hitmonchan" },
    { number: 108, name: "Excelangue", alt: "Lickitung" },
    { number: 109, name: "Smogo", alt: "Koffing" },
    { number: 110, name: "Smogogo", alt: "Weezing" },
    { number: 111, name: "Rhinocorne", alt: "Rhyhorn" },
    { number: 112, name: "Rhinoféros", alt: "Rhydon" },
    { number: 113, name: "Leveinard", alt: "Chansey" },
    { number: 114, name: "Saquedeneu", alt: "Tangela" },
    { number: 115, name: "Kangourex", alt: "Kangaskhan" },
    { number: 116, name: "Hypotrempe", alt: "Horsea" },
    { number: 117, name: "Hypocéan", alt: "Seadra" },
    { number: 118, name: "Poissirène", alt: "Goldeen" },
    { number: 119, name: "Poissoroy", alt: "Seaking" },
    { number: 120, name: "Stari", alt: "Staryu" },
    { number: 121, name: "Staross", alt: "Starmie" },
    { number: 122, name: "M. Mime", alt: "Mr-mime" },
    { number: 123, name: "Insécateur", alt: "Scyther" },
    { number: 124, name: "Lippoutou", alt: "Jynx" },
    { number: 125, name: "Élektek", alt: "Electabuzz" },
    { number: 126, name: "Magmar", alt: "Magmar" },
    { number: 127, name: "Scarabrute", alt: "Pinsir" },
    { number: 128, name: "Tauros", alt: "Tauros" },
    { number: 129, name: "Magicarpe", alt: "Magikarp" },
    { number: 130, name: "Léviator", alt: "Gyarados" },
    { number: 131, name: "Lokhlass", alt: "Lapras" },
    { number: 132, name: "Métamorph", alt: "Ditto" },
    { number: 133, name: "Évoli", alt: "Eevee" },
    { number: 134, name: "Aquali", alt: "Vaporeon" },
    { number: 135, name: "Voltali", alt: "Jolteon" },
    { number: 136, name: "Pyroli", alt: "Flareon" },
    { number: 137, name: "Porygon", alt: "Porygon" },
    { number: 138, name: "Amonita", alt: "Omanyte" },
    { number: 139, name: "Amonistar", alt: "Omastar" },
    { number: 140, name: "Kabuto", alt: "Kabuto" },
    { number: 141, name: "Kabutops", alt: "Kabutops" },
    { number: 142, name: "Ptéra", alt: "Aerodactyl" },
    { number: 143, name: "Ronflex", alt: "Snorlax" },
    { number: 144, name: "Artikodin", alt: "Articuno" },
    { number: 145, name: "Électhor", alt: "Zapdos" },
    { number: 146, name: "Sulfura", alt: "Moltres" },
    { number: 147, name: "Minidraco", alt: "Dratini" },
    { number: 148, name: "Draco", alt: "Dragonair" },
    { number: 149, name: "Dracolosse", alt: "Dragonite" },
    { number: 150, name: "Mewtwo", alt: "Mewtwo" },
    { number: 151, name: "Mew", alt: "Mew" }
];



const pokemonOnRoad1 = [
    availablePokemons[0],
    availablePokemons[3],
    availablePokemons[6],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[18],
    availablePokemons[15],
    availablePokemons[15],
    availablePokemons[15],
]


const pokemonOnRoad2 = [
    availablePokemons[9],
    availablePokemons[12],
    availablePokemons[20],
    availablePokemons[28],
    availablePokemons[31],
    availablePokemons[55],
    availablePokemons[15],
    availablePokemons[18]
]


const pokemonOnRoad3 = [
    availablePokemons[9],
    availablePokemons[10],
    availablePokemons[11],
    availablePokemons[12],
    availablePokemons[13],
    availablePokemons[14],
    availablePokemons[45],
    availablePokemons[42],
    availablePokemons[9],
    availablePokemons[10],
    availablePokemons[11],
    availablePokemons[12],
    availablePokemons[13],
    availablePokemons[14],
    availablePokemons[45],
    availablePokemons[42],
    availablePokemons[9],
    availablePokemons[10],
    availablePokemons[11],
    availablePokemons[12],
    availablePokemons[13],
    availablePokemons[14],
    availablePokemons[45],
    availablePokemons[42],
    availablePokemons[43],
    availablePokemons[44],
    availablePokemons[46],
    availablePokemons[24]
]


const pokemonOnRoad4 = [
    availablePokemons[15],
    availablePokemons[18],
    availablePokemons[38],
    availablePokemons[26],
    availablePokemons[22],
    availablePokemons[128],
    availablePokemons[55],
    availablePokemons[40],
    availablePokemons[73],
    availablePokemons[45],
    availablePokemons[34]
]


const pokemonOnRoad5 = [
    availablePokemons[12],
    availablePokemons[9],
    availablePokemons[42],
    availablePokemons[15],
    availablePokemons[68],
    availablePokemons[13],
    availablePokemons[10],
    availablePokemons[62],
    availablePokemons[128],
    availablePokemons[59],
    availablePokemons[117],
    availablePokemons[53],
    availablePokemons[97],
    availablePokemons[149],
    availablePokemons[12],
    availablePokemons[9],
    availablePokemons[42],
    availablePokemons[15],
    availablePokemons[68],
    availablePokemons[13],
    availablePokemons[10],
    availablePokemons[62],
    availablePokemons[128],
    availablePokemons[59],
    availablePokemons[117],
    availablePokemons[53],
    availablePokemons[97],
    availablePokemons[12],
    availablePokemons[9],
    availablePokemons[42],
    availablePokemons[15],
    availablePokemons[68],
    availablePokemons[13],
    availablePokemons[10],
    availablePokemons[62],
    availablePokemons[128],
    availablePokemons[59],
    availablePokemons[117],
    availablePokemons[53],
    availablePokemons[97],
    availablePokemons[12],
    availablePokemons[9],
    availablePokemons[42],
    availablePokemons[15],
    availablePokemons[68],
    availablePokemons[13],
    availablePokemons[10],
    availablePokemons[62],
    availablePokemons[128],
    availablePokemons[59],
    availablePokemons[117],
    availablePokemons[53],
    availablePokemons[97],
    availablePokemons[40],   // Nosferapti
    availablePokemons[41],   // Nosferalto
    availablePokemons[112],  // Leveinard
    availablePokemons[39],   // Grodoudou
    availablePokemons[73],   // Racaillou
    availablePokemons[74],   // Gravalanch
    availablePokemons[94],   // Onix
    availablePokemons[110],  // Rhinocorne
    availablePokemons[111],  // Rhinoferos
    availablePokemons[113],  // Saquedeneu
    availablePokemons[115],  // Hypotrempe
    availablePokemons[116],  // Hypocéan
    availablePokemons[128],  // Magicarpe
    availablePokemons[129],  // Léviator
    availablePokemons[130],  // Lokhlass
    availablePokemons[131]  // Métamorph
]

const pokemonOnRoad6 = [
    availablePokemons[15],   // Roucool
    availablePokemons[16],   // Roucoups
    availablePokemons[18],   // Rattata
    availablePokemons[19],   // Rattatac
    availablePokemons[62],   // Abra
    availablePokemons[51],   // Miaouss
    availablePokemons[52],   // Persian
    availablePokemons[57],   // Caninos
    availablePokemons[58],   // Arcanin
    availablePokemons[34],   // Mélofée
    availablePokemons[40],   // Nosferapti
    availablePokemons[42],   // Mystherbe
    availablePokemons[43],   // Ortide
    availablePokemons[68],   // Chétiflor
    availablePokemons[69],   // Boustiflor
    availablePokemons[36],   // Goupix
    availablePokemons[37],   // Feunard
    availablePokemons[95],   // Soporifik
    availablePokemons[96],   // Hypnomade
    availablePokemons[73],   // Racaillou
    availablePokemons[74],   // Gravalanch
    availablePokemons[65],   // Machoc
    availablePokemons[66],   // Machopeur
    availablePokemons[80],   // Magnéti
    availablePokemons[81],   // Magnéton
    availablePokemons[99],   // Voltorbe
    availablePokemons[100],  // Électrode
    availablePokemons[97],   // Krabby
    availablePokemons[144],
    availablePokemons[80],   // Magnéti
    availablePokemons[81],   // Magnéton
    availablePokemons[99],   // Voltorbe
    availablePokemons[100],  // Électrode
    availablePokemons[24],   // Pikachu
    availablePokemons[87],   // Tadmorv
    availablePokemons[88]   // Grotadmorv
]

const pokemonOnRoad7 = [
    availablePokemons[18],   // Rattata
    availablePokemons[19],   // Rattatac
    availablePokemons[95],   // Soporifik
    availablePokemons[96],   // Hypnomade
    availablePokemons[62],   // Abra
    availablePokemons[24],   // Pikachu
    availablePokemons[80],   // Magnéti
    availablePokemons[99],   // Voltorbe
    availablePokemons[71],   // Tentacool
    availablePokemons[97],   // Krabby
    availablePokemons[117],  // Poissirène
    availablePokemons[115],  // Hypotrempe
    availablePokemons[128],  // Magicarpe
    availablePokemons[40],   // Nosferapti
    availablePokemons[42],   // Mystherbe
    availablePokemons[43],   // Ortide
    availablePokemons[68],   // Chétiflor
    availablePokemons[69],   // Boustiflor
    availablePokemons[15],   // Roucool
    availablePokemons[16],   // Roucoups
    availablePokemons[57],   // Caninos
    availablePokemons[51],   // Miaouss
    availablePokemons[2]
]

const pokemonOnRoad8 = [
    availablePokemons[71],   // Tentacool
    availablePokemons[72],   // Tentacruel
    availablePokemons[115],  // Hypotrempe
    availablePokemons[116],  // Hypocéan
    availablePokemons[117],  // Poissirène
    availablePokemons[118],  // Poissoroy
    availablePokemons[97],   // Krabby
    availablePokemons[98],   // Krabboss
    availablePokemons[119],  // Stari
    availablePokemons[120],  // Staross
    availablePokemons[128],  // Magicarpe
    availablePokemons[129],  // Léviator
    availablePokemons[85],   // Otaria
    availablePokemons[86],   // Lamantine
    availablePokemons[130],  // Lokhlass
    availablePokemons[40],   // Nosferapti
    availablePokemons[41],   // Nosferalto
    availablePokemons[79],   // Flagadoss
    availablePokemons[73],   // Racaillou
    availablePokemons[74],   // Gravalanch
    availablePokemons[94],   // Onix
    availablePokemons[143],  // Artikodin
    availablePokemons[8]
]

const pokemonOnRoad9 = [
    availablePokemons[40],   // Nosferapti
    availablePokemons[41],   // Nosferalto
    availablePokemons[95],   // Soporifik
    availablePokemons[96],   // Hypnomade
    availablePokemons[65],   // Machoc
    availablePokemons[66],   // Machopeur
    availablePokemons[73],   // Racaillou
    availablePokemons[74],   // Gravalanch
    availablePokemons[94],   // Onix
    availablePokemons[110],  // Rhinocorne
    availablePokemons[111],  // Rhinoferos
    availablePokemons[129],  // Léviator
    availablePokemons[71],   // Tentacool
    availablePokemons[72],   // Tentacruel
    availablePokemons[128],  // Magicarpe
    availablePokemons[123],  // Lippoutou
    availablePokemons[91],   // Fantominus
    availablePokemons[92],   // Spectrum
    availablePokemons[103],  // Osselait
    availablePokemons[49],   // Taupiqueur
    availablePokemons[50],   // Triopikeur
    availablePokemons[145],
    availablePokemons[5],
    availablePokemons[11],    // Papilusion
    availablePokemons[14],    // Dardargnan
    availablePokemons[19],    // Rattatac
    availablePokemons[23],    // Arbok
    availablePokemons[25],    // Raichu
    availablePokemons[27],    // Sablaireau
    availablePokemons[29],    // Nidorina
    availablePokemons[30],    // Nidoqueen
    availablePokemons[32],    // Nidorino
    availablePokemons[33],    // Nidoking
    availablePokemons[36],    // Goupix
    availablePokemons[37],    // Feunard
    availablePokemons[38],    // Rondoudou
    availablePokemons[39],    // Grodoudou
    availablePokemons[41],    // Nosferalto
    availablePokemons[46],    // Parasect
    availablePokemons[70],    // Empiflor
    availablePokemons[72],    // Tentacruel
    availablePokemons[74],    // Gravalanch
    availablePokemons[75],    // Grolem
    availablePokemons[64],    // Alakazam
    availablePokemons[67],    // Machamp
    availablePokemons[93],    // Ectoplasma
    availablePokemons[77],    // Galopa
    availablePokemons[79],    // Flagadoss
    availablePokemons[81],    // Magneton
    availablePokemons[84],    // Dodrio
    availablePokemons[86],    // Lamantine
    availablePokemons[88],    // Grotadmorv
    availablePokemons[104],   // Ossatueur
    availablePokemons[114],   // Kangourex
    availablePokemons[116],   // Hypocéan
    availablePokemons[118],   // Poissoroy
    availablePokemons[120],   // Staross
    availablePokemons[100],   // Électrode
    availablePokemons[112],   // Leveinard
    availablePokemons[130],   // Lokhlass
    availablePokemons[136],   // Porygon
    availablePokemons[142],   // Ronflex
]
let currentRoad = pokemonOnRoad1

let isPikachuCaught = false
const pikachuSprite = document.querySelector(".walkingPikachu")

let caughtPokemon = []

function catchRandom() {
    let i = Math.floor(Math.random() * currentRoad.length);
    console.log(i);

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


function changeRoad() {
    if (currentRoad == pokemonOnRoad1) {
        currentRoad = pokemonOnRoad2
    } else if (currentRoad == pokemonOnRoad2) {
        currentRoad = pokemonOnRoad3
    } else if (currentRoad == pokemonOnRoad3) {
        currentRoad = pokemonOnRoad4
    } else if (currentRoad == pokemonOnRoad4) {
        currentRoad = pokemonOnRoad5
    } else if (currentRoad == pokemonOnRoad5) {
        currentRoad = pokemonOnRoad6
    } else if (currentRoad == pokemonOnRoad6) {
        currentRoad = pokemonOnRoad7
    } else if (currentRoad == pokemonOnRoad7) {
        currentRoad = pokemonOnRoad8
    } else if (currentRoad == pokemonOnRoad8) {
        currentRoad = pokemonOnRoad9
    } else if (currentRoad == pokemonOnRoad9) {
        currentRoad = pokemonOnRoad1
    } else {
        currentRoad = pokemonOnRoad1
    }
}


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
let stepsBeforeRoadChange = 1000


setInterval(() => {
    catchRandom()
    totalClick += 1
}, 10000)

setInterval(() => {
    stepsBeforeRoadChange = stepsBeforeRoadChange - 1
    stepIndicator.innerHTML = stepsBeforeRoadChange
    if (stepsBeforeRoadChange === 0) {
        stepsBeforeRoadChange = 1000
    }
}, 1000)


clickTrainer.addEventListener("click", () => {
    totalClick += 1
    stepsBeforeRoadChange = stepsBeforeRoadChange - 1
    stepIndicator.innerHTML = stepsBeforeRoadChange
    if (totalClick % 10 === 0) {
        catchRandom()
    }
    if (totalClick % 1000 === 0) {
        changeRoad()
    }
});

stepIndicator.innerHTML = stepsBeforeRoadChange


setInterval(() => {
    catchRandom()
}, 10000)

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