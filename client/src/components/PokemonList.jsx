import React from 'react';
import Pokemon from './Pokemon.jsx';

var PokemonList = (props) => {
  return (
    <div>
      {props.pokemonList.map((pokemon, index) => {
        return (
          <Pokemon pokemon={pokemon} key={index}/>
        )
      })}
    </div>
  )
};

export default PokemonList;