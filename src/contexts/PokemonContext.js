import React, { createContext, useReducer } from 'react';
import { pokemonReducer } from '../reducer/PokemonReducer';
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from '../Contant';

const PokemonContext = createContext();


const initData = {
  pokemons: [],
  capturedPokemons: []
}

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initData)
  const { pokemons, capturedPokemons } = state;

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const providerValue = {
    pokemons,
    capturedPokemons,
    capture,
    release,
    addPokemon,
    addPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  )
};

export { PokemonContext, PokemonProvider };
