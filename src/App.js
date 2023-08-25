import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Bracket from './components/Bracket/Bracket';

function App() {

  const [restaurants, setRestaurants] = useState(['Taco Star', 'Red Lobster', 'Taco Bell', 'Cheba Hut'])
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  return (
    <div className="App">
      <Bracket restaurants={restaurants}/>
    </div>
  );
}

export default App;
