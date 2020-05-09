import React, { useContext, useEffect } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    console.log("useEffect run")
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results)

    };

    fetchPokemons();
  }, []);


  const showData = () => {
    return (
      pokemons.map((p, index) =>
        <tr key={index}>
          <td>{p.name}</td>
          <td><button onClick={capture(p)}>+</button></td>
        </tr>
      )
    )
  }

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      <table>
        <tbody>
          <tr>
            <th>Pokemon</th>
            <th>Capture</th>
          </tr>
          {showData()}
          {/* {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: '+'
        })} */}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonsList;
