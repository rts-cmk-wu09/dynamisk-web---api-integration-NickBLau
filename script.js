let pokemonList = document.querySelector("#pokemon-list")


for (let i = 1; i < 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => pokemonList.innerHTML +=`
    <article>  
    <p class="dex-entry">#${data.id}</p>
    <a href="details.html?name=${data.name}"><img class="pokemon-image" src="${data.sprites.front_default}" alt=" "></a>
    <h2>${data.name}</h2>
    <div>
    <p class="dex-types ${data.types[0].type.name}">
    ${data.types.map( type => type.type.name).join(' & ')} </p>
    </div>
</article>`


)}