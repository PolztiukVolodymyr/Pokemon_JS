const refs = {
    pokeContainer: document.querySelector(".container"),
    buttonsWrap: document.querySelector(".wrapBtn")
}


// const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

const pageTypes = new Set();


const getCurrentTypes = pokemon => {
    let types = pokemon.types.map(el => el.type.name)
    // console.log('types:', types)

    const unicPegeTypes = pageTypes.add(...types)

    const arr = [...unicPegeTypes]

    console.log('arr:', arr)

    // for (let value of unicPegeTypes) {
    //     if (value) {

    //     }
    //     console.log('value:', value)
    // }
}



const insertPokemonToDom = pokemon => {

    const templateHtml = `
    <div class="wrapImg">
      <img src=${pokemon.sprites.other.dream_world.front_default} alt=${pokemon.name}/>
      <p>${pokemon.name}</p>
    </div>
    `
    refs.pokeContainer.insertAdjacentHTML("beforeend", templateHtml);
};



const insertButtonToDom = data => {

    const btnPerev = data.previous ? `<button class="btn" data-url=${data.previous}>Previous</button>` : "";
    const btnNext = `<button class="btn" data-url=${data.next}>Next</button> `;

    refs.buttonsWrap.innerHTML = btnPerev + btnNext;

};

// ------------------   fetch    --------------------------

// const fetchPokemon = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             // console.log('data', data)
//             insertButtonToDom(data)
//             return data.results
//         })
//         .then(resPoke => resPoke.map(el => {
//             fetch(el.url)
//                 .then(res => res.json())
//                 .then(pokemon => {
//                     // console.log('pokemon:', pokemon)
//                     insertPokemonToDom(pokemon)

//                 })

//         }))

// };

// fetchPokemon(BASE_URL)

// ------------------   async await    --------------------------

const getPokemon = async (url) => {

    const resp = await fetch(url)
    const pokemon = await resp.json()
    // console.log('pokemon', pokemon)
    // getCurrentTypes(pokemon);
    insertPokemonToDom(pokemon)
};

const fetchPokemon = async (url) => {

    const responce = await fetch(url);
    const res = await responce.json()
    // console.log('res', res)
    res.results.map(el => {
        getPokemon(el.url)

    })

    insertButtonToDom(res);
};

fetchPokemon(BASE_URL);



refs.buttonsWrap.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let value = e.target.dataset.url
        // console.log(value)
        fetchPokemon(value);

    }
    refs.pokeContainer.innerHTML = "";

})