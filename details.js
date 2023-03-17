const params = new URLSearchParams(document.location.search);
const pokemonname = params.get("name");


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
.then(response => response.json())
.then(pokemonData => {
    console.log(pokemonname);
    document.querySelector('body').innerHTML +=` 

<section>
<h2>${pokemonData.forms[0].name}</h2>
<img class="pokemon-image ${pokemonData.types[0].type.name}" src="${pokemonData.sprites.front_default}" alt="${pokemonData.forms[0].name} front">
<img class="pokemon-image ${pokemonData.types[0].type.name}" src="${pokemonData.sprites.back_default}" alt="${pokemonData.forms[0].name} back">




</section>`

pokemonData.moves.forEach(move => {
    document.querySelector('body').innerHTML +=` 
    <p >${move.move.name}
    </p>
    `;
console.log(move.move);
});
})