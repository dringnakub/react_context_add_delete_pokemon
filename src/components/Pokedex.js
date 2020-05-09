import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);
  const showData = () => {
    return (
      capturedPokemons.map((c, index) =>
        <tr key={index}>
          <td>{c.name}</td>
          <td><button onClick={release(c)}>-</button></td>
        </tr>
      )
    )
  }

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <tbody>
          <tr>
            <th>Pokemon</th>
            <th>Release</th>
          </tr>
          {showData()}
          {/* {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: '-'
        })} */}
        </tbody>
      </table>
    </div>
  )
}

export default Pokedex;
