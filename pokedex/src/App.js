import React, {Component} from 'react';
import Pokegame from './Pokegame'
import './Pokecard.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}
export default App;

        // <Pokecard id={4} name="Charmander" type="fire" exp={62} /> 
