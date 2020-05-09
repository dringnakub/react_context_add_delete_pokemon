import React from 'react';

import { PokemonProvider } from './contexts/PokemonContext';
import PokemonsList from './components/PokemonsList';
import Pokedex from './components/Pokedex';
import PokemonForm from './components/PokemonForm';

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
    <div className='form-wrapper'>
      <PokemonForm />
    </div>
  </PokemonProvider>
);

export default App;
