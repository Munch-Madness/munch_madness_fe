import React, {useState} from 'react'

interface Props {
  fetchedRestaurants: string[];
  setBracketRestaurants: Function;
  bracketRestaurants: string[];
  setReadyToPlay: Function;
  bracketSize: number;
  setBracketSize:Function;
}

export default function SelectMenu({fetchedRestaurants, setBracketRestaurants, bracketRestaurants, setReadyToPlay, bracketSize, setBracketSize}: Props) {


  const [searchParams, setSearchParams] = useState('')

  const restaurantOptions = searchParams ? fetchedRestaurants.filter(restaurant => restaurant.toLowerCase().includes(searchParams.toLowerCase())).sort() : fetchedRestaurants.sort()
  const displayRestaurants = restaurantOptions.map(restaurant => (
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

  function searchRestaurants(event: any) {
    setSearchParams(event.target.value)
  }
  
  return (
    <div className='list'>
      <input value={searchParams} type='text' placeholder='Search Restaurants' className='h-10 pl-2 -mb-10 rounded-lg text-lg search' onChange={searchRestaurants}></input>
      <div className='flex justify-between w-full self-start mb-5'>
        <button className='text-green text-lg p-2 border rounded-lg hover:bg-green hover:text-background transition duration-250' onClick={goBack}>Go Back</button>
        <button className='text-green text-lg border p-2 rounded-lg hover:bg-green hover:text-background transition duration-250' onClick={random}>Randomize</button>
      </div>
      {bracketRestaurants.length !== bracketSize && <p className='text-primary mb-5 self-start red'>select {bracketSize - bracketRestaurants.length} more restaurants</p>}
      <ul className='select'>
        {displayRestaurants}
      </ul>
      {bracketRestaurants.length === bracketSize && <button onClick={() => setReadyToPlay(true)} className='text-green mt-3 text-lg border p-2 rounded-lg hover:bg-green hover:text-background transition duration-250'>Let's Play!</button>}
    </div>
  )
}




