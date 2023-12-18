
const listaPokemon = document.querySelector('#listaPokemon')
console.log(listaPokemon)

let URL = "https://pokeapi.co/api/v2/pokemon/"

for(let i = 1; i<= 151; i++){
    
fetch(URL +i)
.then((response) => response.json())
.then(data => mostrarPokemon(data))
.catch(error => ("error", error))
}


function mostrarPokemon(poke){

    let tipos = poke.types;
    console.log(tipos)

    const div = document.createElement("div");
    div.classList.add("pokemon")
    div.innerHTML = `
    <p class="pokemon-id-back">${poke.id}</p>
        <div class="pokemon-imagen">
            <img class="pokemonImage" src="${poke.sprites.front_shiny}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">${poke.id}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                <p class="electric tipo">electric</p>
                <p class="fighting tipo">fighting</p>
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}</p>
                <p class="stat">${poke.weight}</p>
            </div>
        </div>
        `;
        listaPokemon.append(div)
}

/**
 * <div class="pokemon">
                    <p class="pokemon-id-back">#025</p>
                    <div class="pokemon-imagen">
                        <img class="pokemonImage" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png" alt="">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#025</p>
                            <h2 class="pokemon-nombre">pikachu</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="electric tipo">electric</p>
                            <p class="fighting tipo">fighting</p>
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">4m</p>
                            <p class="stat">60kg</p>
                        </div>
                    </div>
                </div>
 */