let pokeCards = [];
const APIurl = "https://api.pokemontcg.io/v1/cards"
const pokelist = document.querySelector(".pokelist");

const getData = async(url) => {
    const data = await fetch(url)
        .then((response) => response.json()).then((response) => response.cards);
    console.log(data);
    return data;
}

const loadCards = async() => {
    pokeCards = await getData(APIurl);
    console.log(pokeCards, "here they are");
    const filteredPokemons = pokeCards.map((el) => {
        const obj = {
            name: el.name,
            image: el.imageUrl,
            artist: el.artist,
            nationalPokedexNumber: el.nationalPokedexNumber
        }
        return obj;
    })
    console.log(filteredPokemons);
    constructor(filteredPokemons);
}

loadCards();

//     .then((response) => window.localStorage.setItem("pokemons", JSON.stringify(response)))
//     .then(() => console.log("pokesaved"));
// return cards;

const constructor = async(pokemons) => {
    pokelist.innerText = "";
    await pokemons.forEach(element => {
        const li = document.createElement("li");
        li.className = "card"
        const img = document.createElement("img");
        img.className = "image";
        img.src = element.image;
        const div = document.createElement("div");
        div.className = "pokeText"
        const pName = document.createElement("p");
        pName.className = "name";
        pName.innerText = element.name;
        const nationalPokedexNumber = document.createElement("p");
        nationalPokedexNumber.innerText = `Pokedex Number: ${element.nationalPokedexNumber}`;
        const partist = document.createElement("p");
        partist.className = "artist"
        partist.innerText = element.artist;
        div.append(pName, nationalPokedexNumber, partist);
        li.append(img, div);
        pokelist.append(li);

    });
}