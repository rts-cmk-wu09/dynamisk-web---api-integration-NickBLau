import axios from "../node_modules/axios/dist/esm/axios.js";

console.log(axios);
let pokemonList = document.querySelector("#pokemon-list")

let kantoPokemon = 151;
const search = document.querySelector("search") 
const searchInput = document.querySelector("[data-search]")


for (let i = 1; i <= 10; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    // fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    // .then((response) => response.json())
    .then((response) => pokemonList.innerHTML +=`
    <article>  
    <p class="dex-entry">#${response.data.id.toString().padStart(3, '0')}</p>
    <a href="details.html?name=${response.data.name}"><img class="pokemon-image ${response.data.types[0].type.name}" src="${response.data.sprites.front_default}" alt=" "></a>
    <h2>${response.data.name}</h2>

    <div class="dex-types">
    ${response.data.types.map( type => {

        return `<span class="${type.type.name}">${type.type.name}</span>`
    }).join(" ")}
    </div>
    <div class="weight-height">
    <p> weight: ${response.data.weight}  </p>
    <p> height: ${response.data.height} </p>
    <div>
</article>`


// searchInput.addEventListener("input", (e => {
//     const value = e.target.value.toLowerCases()
//     data.name.forEach(user =>{
//         const isVisible = ${data.name.includes(value)}
//         user.element.classList.toggle("hide", !isVisible)
//     })
// }))
)}
//use i < array.length on types and moves?


 fetch("https://pokeapi.co/api/v2/pokemon/1/")
 .then((response) => response.json())
 .then((data) =>(data.types.forEach(type => {
     console.log(type.type.name);
 })));



//<p>${}</p>

// <p>${data.types.forEach((type => {
//     pokemon['type'] = pokemon['type'] + ', ' + type.type.name
// }))}</p>

// pokemonData.moves.forEach(move => {
//     document.querySelector('body').innerHTML +=` 
//     <p >${move.move.name}
//     </p>
//     `;
// console.log(move.move);