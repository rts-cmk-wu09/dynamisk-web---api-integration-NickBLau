let pokemonList = document.querySelector("#pokemon-list")

let kantoPokemon = 151;
const search = document.querySelector("search") 
const searchInput = document.querySelector("[data-search]")


for (let i = 1; i <= 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => pokemonList.innerHTML +=`
    <article>  
    <p class="dex-entry">#${data.id}</p>
    <a href="details.html?name=${data.name}"><img class="pokemon-image ${data.types[0].type.name}" src="${data.sprites.front_default}" alt=" "></a>
    <h2>${data.name}</h2>

    <div class="dex-types">
    ${data.types.map( type => {

        return `<span class="${type.type.name}">${type.type.name}</span>`
    }).join(" ")}
    </div>
    <div class="weight-height">
    <p> weight: ${data.weight}  </p>
    <p> height: ${data.height} </p>
    <div>
</article>`)}