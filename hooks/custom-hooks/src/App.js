
import './App.css';
import React from 'react';
import CounterHooks from './CounterHook';
import Toggler from './Toggler';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <CounterHooks />
      <Toggler />
      <Clicker />
    </div>
  );
}

export default App;
