import React from 'react'

interface Props {
  fetchedRestaurants: string[];
  setBracketRestaurants: Function;
  bracketRestaurants: string[];
  setReadyToPlay: Function;
  bracketSize: number;
  setBracketSize:Function;
}

export default function SelectMenu({fetchedRestaurants, setBracketRestaurants, bracketRestaurants, setReadyToPlay, bracketSize, setBracketSize}: Props) {

  const options = fetchedRestaurants.sort().map(restaurant => (
    <li key={restaurant} className='flex justify-between pr-10 py-1 cursor-pointer'>{restaurant} <span>{bracketRestaurants.includes(restaurant) ? <span className='remove' id={restaurant} onClick={selectRestaurant}>🟢</span> : <span className='add' id={restaurant} onClick={selectRestaurant}>⚪️</span>}</span></li>
  ))

  function selectRestaurant(event: any) {
    if (bracketRestaurants.length < bracketSize && event.target.className === 'add') {
      setBracketRestaurants([...bracketRestaurants, event.target.id])
    } else if (event.target.className === 'remove') {
      const removed = bracketRestaurants.filter(restaurant => (
        restaurant !== event.target.id
      ))
      setBracketRestaurants(removed)
    }
  }

  function random() {
    const shuffledArray = fetchedRestaurants.sort(() => 0.5 - Math.random());
    const result = shuffledArray.slice(0, bracketSize);
    setBracketRestaurants(result);
  }
  
  function goBack() {
    setBracketSize(0)
    setBracketRestaurants([])
  }
  
  return (
    <div className='list'>
      <div className='flex justify-between w-full self-start'>
        <button className='text-green text-xl p-2 border rounded-lg mb-5' onClick={goBack}>Go Back</button>
        <button className='text-green text-xl border p-2 rounded-lg mb-5' onClick={random}>Randomize</button>
      </div>
      {bracketRestaurants.length !== bracketSize && <p className='text-primary mb-5 self-start red'>select {bracketSize - bracketRestaurants.length} more restaurants</p>}
      <ul className='select'>
        {options}
      </ul>
      {bracketRestaurants.length === bracketSize && <button onClick={() => setReadyToPlay(true)} className='text-green mt-3 text-2xl border p-2 rounded-lg'>Let's Play!</button>}
    </div>
  )
}




