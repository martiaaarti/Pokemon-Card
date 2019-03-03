import React from 'react';
import PokemonCard from './PokemonCard.js';
import {Route} from 'react-router-dom';

const App = () => (
      <div>
          <Route exact path='/' component={PokemonCard} />                 
      </div>
);

export default App;
