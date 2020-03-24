import React from 'react'

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

  export default Superhero