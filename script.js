let pokemonList = document.querySelector("#pokemon-list")


for (let i = 1; i < 11; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) =>pokemonList.innerHTML +=
    `        <article>  
    <p class="dex-entry">#${data.id}</p>
    <img class="pokemon-image" src="${data.sprites.front_default}" alt=" ">
    <h2>${data.name}</h2>
    <p class="dex-types">${data.types.map( type => type.type.name).join(' & ')} </p>
    
</article>`
)}

