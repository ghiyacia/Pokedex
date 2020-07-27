import React, {FunctionComponent, useState, useEffect} from 'react';
import PokemonList from './pages/pokemon-list'
import PokemonCard from './components/pokemon-card';
const App: FunctionComponent = () => {

 return (
     <PokemonList />
 );
}
  
export default App;