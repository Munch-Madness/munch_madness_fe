import React from 'react'

interface Props {
  allRestaurants: string[];
  setRestaurants: Function;
  restaurants: string[];
  setSelected: Function;
  bracketSize: number;
}

export default function SelectMenu({allRestaurants, setRestaurants, restaurants, setSelected, bracketSize}: Props) {

  const options = allRestaurants.sort().map(restaurant => (
    <li key={restaurant} className='flex justify-between pr-10 py-1 cursor-pointer'>{restaurant} <span>{restaurants.includes(restaurant) ? <span className='remove' id={restaurant} onClick={selectRestaurant}>🟢</span> : <span className='add' id={restaurant} onClick={selectRestaurant}>⚪️</span>}</span></li>
  ))

  function selectRestaurant(event: any) {
    if (restaurants.length < bracketSize && event.target.className === 'add') {
      setRestaurants([...restaurants, event.target.id])
    } else if (event.target.className === 'remove') {
      const removed = restaurants.filter(restaurant => (
        restaurant !== event.target.id
      ))
      setRestaurants(removed)
    }
  }
  
  return (
    <div className='list'>
      <ul className='select'>
        {options}
      </ul>
      {restaurants.length === bracketSize && <button onClick={() => setSelected(true)} className='text-primary mt-3 text-2xl border p-2 rounded-lg'>Let's Play!</button>}
    </div>
  )
}




