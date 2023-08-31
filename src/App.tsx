import React, { useState, useEffect } from 'react';
import Bracket from './components/Bracket/Bracket'
import { BracketChoice } from './components/BracketChoice/BracketChoice';
import SelectMenu from './components/SelectMenu/SelectMenu';
// import getData from './components/apiCalls';
import ErrorMessage from './components/error';

function App() {
  const [error, setError] = useState("")
  const [bracketSize, setBracketSize]:any = useState(0)
  const [fetchedRestaurants, setFetchedRestaurants]:any = useState([])
  const [bracketRestaurants, setBracketRestaurants]:any = useState([]);
  const [readyToPlay, setReadyToPlay]:any = useState(false)

  useEffect(() => {
    fetch("https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=80214&search=random")
    .then(response => {
      if (!response.ok) {
        throw new Error("Problem with Network");
      }
      return response.json();
    })
    .then(data => {
      setFetchedRestaurants(data.data);
    })
    .catch(error => setError(error.message));
  }, []);
console.log(fetchedRestaurants, "fetched")
console.log(bracketRestaurants, "bracket")
 
  return (
    <div className="App flex flex-col justify-center items-center bg-background">
      <img src='./assets/MunchMadness.PNG' alt='MunchMadness Title' className={readyToPlay ? `w-36 items-center absolute top-0 right-0 md:w-72 ` : `w-36 items-center absolute top-0 md:w-96`}/>
      {!bracketSize && <BracketChoice setBracketSize={setBracketSize}/>}
      {bracketSize && !readyToPlay && <SelectMenu fetchedRestaurants={fetchedRestaurants} setBracketRestaurants={setBracketRestaurants} bracketRestaurants={bracketRestaurants} setReadyToPlay={setReadyToPlay} bracketSize={bracketSize} setBracketSize={setBracketSize}/>}
      {readyToPlay && <Bracket setBracketSize={setBracketSize} bracketRestaurants={bracketRestaurants} setBracketRestaurants={setBracketRestaurants} setReadyToPlay={setReadyToPlay}/>}
      {error && <ErrorMessage message={error}/>}
    </div>
  );
}

export default App;
