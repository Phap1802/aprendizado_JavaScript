


//window objeto global que da acesso a janela do browser
//document  da acesso ao elementos da pagina sprites > other > ream > dream_world front_default
const pokemonsList = document.getElementById('pokemonList')

//pegando botao da pagina 
const loadMoreButton = document.getElementById('showMore')

const maxRecords = 151
const limit = 12
let offset = 0 





function loadPokemonItens(offset, limit){

    
    
    //Tive toque ao ver os numero da pokedex entao fiz uma funçao para formatar o prefixo dos numeros 
    function prefixoNumber(pokemon){
        const pre = pokemon;

        if (pre >= 100){
            return '#'
        } else if ( pre>= 10){
            return '#0'
        } else { 
            return '#00'
        }
    }


   

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

         // join = "converter os elementos da lista numa string pelo separador colocado no parametro"
    
        //sintatse enxutada que contatena a lista de pokemon ja convertida 
        pokemonsList.innerHTML += pokemons.map((pokemon) =>
                ` <li class="pokemon ${pokemon.type}">
                <span class="number"> ${prefixoNumber(pokemon.number)}${pokemon.number} </span>
                <span class="name"> ${pokemon.name} </span> 

                <div class="cardBody" >
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(" ")}
                </ol>

                

                <div class="bg-img">
                
                    <img  src="${pokemon.photo}" alt="${pokemon.name} "  >
                    
                    
                </div>    
            </div>
        </li>` ).join(' ')

    } )
}

loadPokemonItens(offset, limit)

//adiciona um evento no botao criado "nesse caso abaixo quando clicar no botao ele vai carregar mais 5 pokemons"
loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit =  maxRecords - offset  
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {

    loadPokemonItens(offset, limit)
    }
})
   

 /*
    METODO que tras a FUNÇÃO RESPONSE=PROMISE  e converte "DE FORMA INADEQUADA extendendo o codigo"
    A forma ideal deixei no corpo do codigo qeu seria com o usso de arrows. 
 .then(function(response){
        //SitatseClasse .json que converte o body em jason"metodo 1". 
            response.json()
            .then(function(responseBody){
            console.log(responseBody);
            })

        //Convertendo body em jason"metodo 2 -IDEAL" ( por nao ficar funções dentro de funções essa e a sintate-se masi ideal). 
        return response.json()        
    }) */