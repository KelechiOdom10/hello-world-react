import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, Icon, Image } from 'semantic-ui-react'
import Superhero from './components/Superhero.js'

function App() {
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <Card>
        <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>

      <br />
      <Superhero name = "Spiderman" strength = "Shooting webs" weakness = "likes women" enemy = "Dr.Octopus" />
      <br />
      <Superhero name = "Batman" strength = "Super Rich" weakness = "childhood trauma" enemy = "Joker" />
    </div> 
  )
}

export default App;