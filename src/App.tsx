// import './App.css';
import React, { useState } from 'react';
import Bracket from './components/Bracket/Bracket'
import { BracketChoice } from './components/BracketChoice/BracketChoice';

function App() {
  const [bracketSize, setBracketSize] = useState(0)


  
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
