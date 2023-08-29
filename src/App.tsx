import React, { useState } from 'react';
import Bracket from './components/Bracket/Bracket'
import { BracketChoice } from './components/BracketChoice/BracketChoice';
import SelectMenu from './components/SelectMenu/SelectMenu';

function App() {
  const [bracketSize, setBracketSize] = useState(0)
  const [allRestaurants, setAllRestaurants] = useState([
  'Omakase',
  'Freebirds',
  'Wendys',
  'Dennys',
  'McDonalds',
  'Taco Bell',
  'Burger King',
  'Chipotle',
  'Applebees',
  'Taco Star',
  'Red Robin',
  'Red Lobster',
  'Ruths Chris',
  'Burgerville',
  'iHop',
  'Cheba Hut'
])
  const [restaurants, setRestaurants] = useState([]);
  const [selected, setSelected] = useState(false)
console.log(restaurants)
  
  return (
    <div className="App flex flex-col justify-center items-center bg-background">
      <img src='./assets/MunchMadness.PNG' alt='MunchMadness Title' className={selected ? `w-36 items-center absolute top-0 right-0 md:w-72 ` : `w-36 items-center absolute top-0 md:w-96`}/>
      {!bracketSize && <BracketChoice setBracketSize={setBracketSize}/>}
      {bracketSize && !selected && <SelectMenu allRestaurants={allRestaurants} setRestaurants={setRestaurants} restaurants={restaurants} setSelected={setSelected} bracketSize={bracketSize}/>}
      {selected && <Bracket setBracketSize={setBracketSize} restaurants={restaurants} setRestaurants={setRestaurants} setSelected={setSelected}/>}
    </div>
  );
  }

export default App;