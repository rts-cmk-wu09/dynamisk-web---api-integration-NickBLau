let pokemonList = document.querySelector("#pokemon-list")

fetch("https://pokeapi.co/api/v2/pokemon")
.then((response) => response.json())
.then((data) => {data.results.forEach(result =>{
    pokemonList.innerHTML +=
    `        <article>
    <h2>${result.name}</h2>
    <img src="pokemon-img" alt="img.alt">
    <p>${result.url.abilties}</p>
</article>`
})
    console.log(data.results[0])} );


 fetch("https://pokeapi.co/api/v2/pokemon/1/")
 .then((response) => response.json())
 .then((data) => console.log(data));