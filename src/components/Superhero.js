import React from 'react'
import Attributes from './Attributes'

function Superhero(props) {
    return(
      <div>
        <Attributes title = "Superhero:" value = {props.name} />
        <Attributes title = "Strength:" value = {props.strength} />
        <Attributes title = "Weaknesses:" value = {props.weakness} />
        <Attributes title = "Enemy:" value = {props.enemy} />
      </div>
    )
  }

  export default Superhero

