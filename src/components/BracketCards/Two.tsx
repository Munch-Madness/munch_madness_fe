import React from 'react'

export interface Props {
  restaurants: string[]
}

function Two({restaurants}: Props) {
  return (
    <div className='round'>
      <div className='matchup-container four'>
        <p className='team'>{restaurants[0]}</p>
        <div className='spacer'></div>
        <p className='team'>{restaurants[1]}</p>
      </div>
    </div>
  )
}

export default Two
