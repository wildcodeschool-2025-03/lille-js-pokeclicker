const Dex = [
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


function CatchRandom(array) {
    let i = Math.floor(Math.random() * array.length);

    let r = array[i];
    console.log(r.name);
    i = 0;
}