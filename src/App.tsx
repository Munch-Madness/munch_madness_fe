// import './App.css';
import React, { useState } from 'react';
import Bracket from './components/Bracket/Bracket'

function App() {

  const [restaurants, setRestaurants] = useState(['Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'])
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut', 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  return (
    <div className="flex flex-col justify-center bg-gray-400">
      <h1 className='text-center text-4xl'>Munch Madness</h1>
      <Bracket restaurants={restaurants}/>
    </div>
  );
}

export default App;
