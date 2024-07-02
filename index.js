let pokemon = document.getElementById("search").value;
let search = document.getElementById("sumbit-btn");
let image = document.getElementById("pokemonID");



async function pokemonDisplay(){
    console.log(pokemon);

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            
            image.src = response.sprites.front_default;
            image.style.display = "inline-block";
            

          }
          const json = await response.json();
          console.log(json)
      
    }
    catch (error) {
        console.error(error.message);

        }
}