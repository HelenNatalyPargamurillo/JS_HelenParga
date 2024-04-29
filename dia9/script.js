 const nombrepokeman= document.querySelector("nombre_pokeman");
 const numeropokeman= document.querySelector("numero_pokemon");
 const imgpokemon= document.querySelector("pokeimg");
 const form= document.querySelector("form");
 const input= document.querySelector("buscador");


 const fetchPokemon= async (pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
   
  } 

 const renderPokemon =  async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    nombrepokeman.innerHTML = data.name;
    numeropokeman.innerHTML = data.id;
    imgpokemon.src = data["sprites"]["versions"]["black-white"]["animated"]["front_default"];
 }
 
 form.addEventListener("submit" , (event)=> {
    event.proventdefault();
    console.log(input.value)
    input.value =""
 });
 renderPokemon("")