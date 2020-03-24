import React from 'react';
import logo from './logo.svg';
import './App.css';
import Superhero from './components/Superhero.js'

function App() {
  return (
      <div className="App">
        <h1>Superheroes</h1>
        <Superhero name = "Spiderman" strength = "Shooting webs" weakness = "likes women" enemy = "Dr.Octopus" />
        <br />
        <Superhero name = "Batman" strength = "Super Rich" weakness = "childhood trauma" enemy = "Joker" />
      </div>
  );
}

export default App;
