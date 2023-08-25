import React from 'react'
import { Props } from './Two'

function Four({restaurants}: Props) {
  return (
  <>
    <div className='round'>
      <div className='matchup-container three'>
        <p className='team'>{restaurants[0]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[3]}</p>
      </div>
      <div className='matchup-container three'>
        <p className='team'>{restaurants[1]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[2]}</p>
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

export default Four
