import React, {Component} from 'react';
import Pokedex from './Pokedex';
import './Pokecard.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}
export default App;

        // <Pokecard id={4} name="Charmander" type="fire" exp={62} /> 
