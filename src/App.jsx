
import React, { useState } from 'react';
import useCustomHook from './hooks/useFecthCharacters';

const App = () => {


  const [urlPokemon,setPokemon] = useState('https://pokeapi.co/api/v2/pokemon/1')
  const [urlRick,setUrlrick] = useState('https://rickandmortyapi.com/api/character/1')

  const pokemonData = useCustomHook(urlPokemon);
  const rickData = useCustomHook(urlRick);
//sprites.other['official-artwork'].front_default
  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickData ? (
        <div>
          <p>{rickData.name}</p>
          <img src={rickData.image} alt={rickData.name} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default App;
