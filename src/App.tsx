import React, { useState, useEffect } from 'react';
import Bracket from './components/Bracket/Bracket'
import { BracketChoice } from './components/BracketChoice/BracketChoice';
import SelectMenu from './components/SelectMenu/SelectMenu';
// import getData from './components/apiCalls';
import ErrorMessage from './components/error';

function App() {
  const [error, setError] = useState("")
  const [bracketSize, setBracketSize] = useState(0)
  const [fetchedRestaurants, setFetchedRestaurants] = useState([])
  const [bracketRestaurants, setBracketRestaurants] = useState([]);
  const [readyToPlay, setReadyToPlay] = useState(false)

  useEffect(() => {
    fetch("https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=80214&search=random")
    .then(response => {
      if (!response.ok) {
        throw new Error("Problem with Network");
      }
      return response.json();
    })
    .then(data => {
      console.log(data.data[0].attributes.name)
      setFetchedRestaurants(data.data);
    })
    // .then(data => console.log(data))
    .catch(error => console.error(error));
  }, []);
console.log(fetchedRestaurants, "fetched")
 
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
