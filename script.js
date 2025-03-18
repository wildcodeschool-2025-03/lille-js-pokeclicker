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
]


function CatchRandom(array) {
    let i = Math.floor(Math.random() * array.length);

    let r = array[i];
    console.log(r);
    i = 0;
}