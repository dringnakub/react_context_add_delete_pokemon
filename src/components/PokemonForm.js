import React, { useContext, useState } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

export const generateID = () => {
  const a = Math
    .random()
    .toString(36)
    .substring(2, 15);

  const b = Math
    .random()
    .toString(36)
    .substring(2, 15);

  return a + b;
}


const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon } = useContext(PokemonContext);

  const handleNameOnChange = (e) => {
    setPokemonName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default PokemonForm;
