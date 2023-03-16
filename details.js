const params = new URLSearchParams(document.location.search);
const pokemonname = params.get("name");


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
.then(response => response.json())
.then(pokemonData => {
    console.log(pokemonname);
    document.querySelector('body').innerHTML +=` 

<section>
<h2>${pokemonData.forms[0].name}</h2>




</section>`

pokemonData.moves.forEach(move => {
    document.querySelector('body').innerHTML +=` 
    <p >${move.move.name}
    </p>
    `;
console.log(move.move);
});
})