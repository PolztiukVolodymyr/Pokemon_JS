// const insertToDom = pokemon => {
//     const body = document.querySelector('body');
//     const image = document.createElement('img');
//     image.src = pokemon.sprites.front_default;

//     body.appendChild(image);
// };

// const req1 = fetch('https://pokeapi.co/api/v2/pokemon/1').then(resp => resp.json());
// const req2 = fetch('https://pokeapi.co/api/v2/pokemon/14').then(resp => resp.json());
// const req3 = fetch('https://pokeapi.co/api/v2/pokemon/15').then(resp => resp.json());


// Promise.all([req1, req2, req3])
//     .then((pokemonList) => {
//         // pokemonList === [resp1, resp2, resp3]

//         console.log(pokemonList);
//         pokemonList.forEach(insertToDom)
//     })
//     .catch(errorText => console.log(errorText));

// -----------------   Promise.race  -------------

// const insertToDom = pokemon => {
//     const body = document.querySelector('body');
//     const image = document.createElement('img');
//     image.src = pokemon.sprites.front_default;

//     body.appendChild(image);
// };

// const req1 = fetch('https://pokeapi.co/api/v2/pokemon/1').then(resp => resp.json());
// const req2 = fetch('https://pokeapi.co/api/v2/pokemon/10').then(resp => resp.json());
// const req3 = fetch('https://pokeapi.co/api/v2/pokemon/25').then(resp => resp.json());

// Promise.race([req1, req2, req3])
//     .then(pokemon => {
//         insertToDom(pokemon);
//     });


// -------------------------   Promise.all   --------------------

// const insertToDom = pokemon => {
//     // const pokeList = document.getElementById('pokemon');
//     const pokeList = document.querySelector('#pokemon');
//     const image = document.createElement('img');
//     image.src = pokemon.sprites.front_default;

//     pokeList.appendChild(image);
// };

// const req1 = fetch("https://pokeapi.co/api/v2/pokemon/17")
//     .then(res => res.json())

// const req2 = fetch("https://pokeapi.co/api/v2/pokemon/22")
//     .then(res => res.json())


// Promise.all([req1, req2])
//     .then((pokemonList) => {
//         console.log(pokemonList);
//         pokemonList.forEach(insertToDom)
//     })
//     .catch(errorText => console.log(errorText));



// --------------------  poremon list  ---------

// const listPokemons = document.querySelector(".pokemonsContainer");

// const insertToDom = pokemon => {

//     const pokeName = document.createElement("p");
//     pokeName.textContent = pokemon.name;

//     const img = document.createElement("img");
//     img.src = pokemon.sprites.other.dream_world.front_default;

//     const pokemonWrap = document.createElement("div");
//     pokemonWrap.classList.add("wrapImg")

//     pokemonWrap.append(img, pokeName);
//     listPokemons.appendChild(pokemonWrap);
// }