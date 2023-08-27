// import './App.css';
import React, { useState } from 'react';
import Bracket from './components/Bracket/Bracket'

function App() {

  const [restaurants, setRestaurants] = useState(['Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'])
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut', 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  return (
    <div className="flex flex-col justify-center items-center bg-white-400">
      <img src='./assets/MunchMadness.PNG' alt='MunchMadness Title' className='w-72 items-center'/>
      <Bracket restaurants={restaurants}/>
    </div>
  );
}

export default App;
