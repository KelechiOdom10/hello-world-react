import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, Icon, Image } from 'semantic-ui-react'
import Superhero from './components/Superhero.js'

function App() {
  return (
    <div className="App">
      <h1>Superheroes</h1>
      <div id = 'cards'>
        <Card>
          <Image  src='../assets/spidermanSV.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Spider-man</Card.Header>
            <Card.Meta>
              <span className='date'>Founded in 1962</span>
            </Card.Meta>
            <Card.Description>
              Spider-man shoots webs for fun
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              50,300,500 Fans
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src='../assets/batman.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Batman</Card.Header>
            <Card.Meta>
              <span className='date'>Founded in 1939</span>
            </Card.Meta>
            <Card.Description>
              Batman beats up poor people for fun
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              3,300,500 Fans
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image class ='imgg' src='../assets/hulk.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Hulk</Card.Header>
            <Card.Meta>
              <span className='date'>Founded in 1962</span>
            </Card.Meta>
            <Card.Description>
              Smashes bad guys consistently
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10,300,500 Fans
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src='../assets/iron-man.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Iron-Man</Card.Header>
            <Card.Meta>
              <span className='date'>Founded in 1963</span>
            </Card.Meta>
            <Card.Description>
              He is a billionare, philanthropist, playboy 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              20,300,500 Fans
            </a>
          </Card.Content>
        </Card>
      </div>
      <br />
      <Button>Find out More</Button>

      {/* <br />
      <Superhero name = "Spiderman" strength = "Shooting webs" weakness = "likes women" enemy = "Dr.Octopus" />
      <br />
      <Superhero name = "Batman" strength = "Super Rich" weakness = "childhood trauma" enemy = "Joker" /> */}
    </div> 
  )
}

export default App;