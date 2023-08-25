import React from 'react'
import './BracketCards.css'
import { Props } from './Two'

function Eight({restaurants}: Props) {
  return (
  <>
    <div className='round'>
      <div className='matchup-container two'>
        <p className='team'>{restaurants[0]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[7]}</p>
      </div>
      <div className='matchup-container two'>
        <p className='team'>{restaurants[1]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[6]}</p>
      </div>
      <div className='matchup-container two'>
        <p className='team'>{restaurants[2]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[5]}</p>
      </div>
      <div className='matchup-container two'>
        <p className='team'>{restaurants[3]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[4]}</p>
      </div>
    </div>
    <div className='round'>
      <div className='matchup-container three'>
        <p className='team'>TBD</p>
        <div className='spacer'></div>
        <p className='team'>TBD</p>
      </div>
      <div className='matchup-container three'>
        <p className='team'>TBD</p>
        <div className='spacer'></div>
        <p className='team'>TBD</p>
      </div>
    </div>
    <div className='round'>
      <div className='matchup-container four'>
        <p className='team'>TBD</p>
        <div className='spacer'></div>
        <p className='team'>TBD</p>
      </div>
    </div>
  </>
  )
}

export default Eight
