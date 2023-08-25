import React from 'react'
import './Bracket.css'
import Sixteen from '../BracketCards/Sixteen'
import Eight from '../BracketCards/Eight'
import Four from '../BracketCards/Four'
import Two from '../BracketCards/Two'

function Bracket({restaurants}) {

  const displayBracket = () => {
    if (restaurants.length === 16) {
      return <Sixteen restaurants={restaurants} />
    } else if (restaurants.length === 8) {
      return <Eight restaurants={restaurants} />
    } else if (restaurants.length === 4) {
      return <Four restaurants={restaurants} />
    } else if (restaurants.length === 2) {
      return <Two restaurants={restaurants} />
    }
  }

  return (
    <div className='bracket-container'>
      {restaurants.length > 0 ? displayBracket() : 'No Bracket Set'}
    </div>
  )
}

export default Bracket
