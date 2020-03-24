import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function Superhero(props) {
  return(
    <div>
      <p><b>Superhero:</b> {props.name}</p>
      <p><b>Strength:</b> {props.strength}</p>
      <p><b>Weaknesses:</b> {props.weakness}</p>
      <p><b>Enemy:</b> {props.enemy}</p>
    </div>
  )
}

export default App;
