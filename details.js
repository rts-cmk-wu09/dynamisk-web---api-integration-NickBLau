// const params = new URLSearchParams(window.location.search);
// const id = params.get("id");

// let pokemonDetails = document.querySelector('#pokemon-details')

// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())
//     .then((data) => pokemonDetails.innerHTML +=`

// <img src="${data.image}" alt="">
// `)

// fetch("https://pokeapi.co/api/v2/pokemon/1/")
// .then((response) => response.json())
// .then((data) => console.log(data));

const params = new URLSearchParams(window.location.search);
const newId = params.get("id");

let destinationImage = document.querySelector("#destinationImage")
let moveSet = document.querySelector("#move-set")

fetch(`https://pokeapi.co/api/v2/pokemon/`)
.then(response => response.json())
.then(data => {document.querySelector('body').innerHTML +=` 

<section>
<h2>${data.name}</h2>


</section>`
console.log(data);
// ${data.moves.forEach((move)).move.name}
//     data.moves.forEach(move => { 
//     moveSet.innerHTML +=`
//     <p>${move}</p>`
//     console.log(move[1]);
// });

})

{/* <p> Moveset [${data.moves[1].move.name}] </p> */}
// <p class="move-set">${data.moves.map( move => move.move.name).join('  ')} </p> 