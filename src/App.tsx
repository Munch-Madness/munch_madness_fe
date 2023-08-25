// import './App.css';
import React, { useState } from 'react';
import Bracket from './components/Bracket/Bracket'

function App() {

  const [restaurants, setRestaurants] = useState(['Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'])
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut', 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  return (
    <div className="App">
      <Bracket restaurants={restaurants}/>
    </div>
  );
}

export default App;
