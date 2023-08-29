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
  
  function goBack() {
    setBracketSize(0)
    setRestaurants([])
  }
  
  return (
    <div className='list'>
      <div className='flex justify-between w-full self-start'>
        <button className='text-green text-xl p-2 border rounded-lg mb-5' onClick={goBack}>Go Back</button>
        <button className='text-green text-xl border p-2 rounded-lg mb-5' onClick={random}>Randomize</button>
      </div>
      {restaurants.length !== bracketSize && <p className='text-primary mb-5 self-start red'>select {bracketSize - restaurants.length} more restaurants</p>}
      <ul className='select'>
        {options}
      </ul>
      {restaurants.length === bracketSize && <button onClick={() => setSelected(true)} className='text-green mt-3 text-2xl border p-2 rounded-lg'>Let's Play!</button>}
    </div>
  )
}




