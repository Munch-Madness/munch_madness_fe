import React, { useState, useEffect } from 'react';
import Bracket from './components/Bracket/Bracket';
import { BracketChoice } from './components/BracketChoice/BracketChoice';
import SelectMenu from './components/SelectMenu/SelectMenu';
// import { getData } from './components/apiCalls';
import ErrorMessage from './components/error';
import { checkRestaurants } from './components/util/helperFunctions';


function App() {
  const [error, setError] = useState('');
  const [bracketSize, setBracketSize]: any = useState(0);
  const [fetchedRestaurants, setFetchedRestaurants]: any = useState([]);
  const [bracketRestaurants, setBracketRestaurants]: any = useState([]);
  const [readyToPlay, setReadyToPlay]: any = useState(false);
  const [zipCode, setZipCode]: any = useState('');
  const [loading, setLoading] = useState(true);
  const [bracketMessage, setBracketMessage] = useState('')

  function loadRestaurants(data: object) {
    setFetchedRestaurants(data);
    setLoading(false);
  }


  useEffect(() => {
    if (zipCode.length === 5 && bracketSize) {
      fetch(
        `https://munch-madness-be-8b56c3719f5f.herokuapp.com/api/v1/places/?query=${zipCode}&search=random`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Problem with Network');
          }
          return response.json();
        })
        .then((data) => {
          loadRestaurants(data.data)
        })
        .catch((error: Error) => setError(error.message));
    }
  }, [zipCode, bracketSize]);

  useEffect(() => {
    checkRestaurants(fetchedRestaurants, setBracketSize, setBracketMessage, bracketSize)
  }, [fetchedRestaurants])

  return (
    <div className="App flex flex-col justify-center items-center bg-background">
      <img
        src="./assets/MunchMadness.PNG"
        alt="MunchMadness Title"
        className={
          readyToPlay
            ? `w-24 p-1 items-center absolute top-0 right-0 lg:w-72 sm:w-36`
            : `w-24 p-1 items-center absolute top-0 lg:w-72 sm:w-36`
        }
      />
      {!bracketSize && (
        <BracketChoice
          zipCode={zipCode}
          setZipCode={setZipCode}
          setBracketSize={setBracketSize}
        />
      )}
      {bracketSize && !readyToPlay && (
        <SelectMenu
          fetchedRestaurants={fetchedRestaurants}
          setBracketRestaurants={setBracketRestaurants}
          bracketRestaurants={bracketRestaurants}
          setReadyToPlay={setReadyToPlay}
          bracketSize={bracketSize}
          setBracketSize={setBracketSize}
          loading={loading}
          setFetchedRestaurants={setFetchedRestaurants}
          setError={setError}
          setLoading={setLoading}
          bracketMessage={bracketMessage}
          setBracketMessage={setBracketMessage}
        />
      )}
      {readyToPlay && (
        <Bracket
          setBracketSize={setBracketSize}
          bracketRestaurants={bracketRestaurants}
          setBracketRestaurants={setBracketRestaurants}
          setReadyToPlay={setReadyToPlay}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default App;
