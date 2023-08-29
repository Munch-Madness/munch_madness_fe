import React from 'react'

interface Props {
  allRestaurants: string[];
  setRestaurants: Function;
  restaurants: string[];
  setSelected: Function;
  bracketSize: number;
  setBracketSize:Function;
}

export default function SelectMenu({allRestaurants, setRestaurants, restaurants, setSelected, bracketSize, setBracketSize}: Props) {

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

  function random() {
    const shuffledArray = allRestaurants.sort(() => 0.5 - Math.random());
    const result = shuffledArray.slice(0, bracketSize);
    setRestaurants(result);
  }
  
  
  return (
    <div className='list'>
      <div className='flex justify-between w-full self-start'>
        <button className='text-green text-xl mb-10 p-2 border rounded-lg' onClick={() => setBracketSize(0)}>Go Back</button>
        <button className='text-green text-xl mb-10 border p-2 rounded-lg' onClick={random}>Randomize</button>
      </div>
      <ul className='select'>
        {options}
      </ul>
      {restaurants.length === bracketSize && <button onClick={() => setSelected(true)} className='text-green mt-3 text-2xl border p-2 rounded-lg'>Let's Play!</button>}
    </div>
  )
}




