import React, { useState, useEffect } from 'react';
import Sixteen from '../BracketCards/Sixteen';
import Eight from '../BracketCards/Eight';
import Four from '../BracketCards/Four';
import Two from '../BracketCards/Two';

function Bracket() {
  const [restaurants, setRestaurants] = useState([
    'Applebees',
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
    'McDonalds',
    'Burgerville',
    'iHop',
    'Cheba Hut',
  ]);
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut', 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  //fetch will go here and use setRestaurants to set the state of the restaurants array and use bracketSize to fetch the right number of restaurants
  const [round1Winners, setRound1Winners] = useState([]);
  const [round2Winners, setRound2Winners] = useState([]);
  const [round3Winners, setRound3Winners] = useState([]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (round1Winners.length === 8) {
      setRestaurants(round1Winners);
    }
    if (round2Winners.length === 4) {
      setRestaurants(round2Winners);
    }
    if (round3Winners.length === 2) {
      setRestaurants(round3Winners);
    }
    if (winner !== '') {
      setRestaurants([winner]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round1Winners, round2Winners, round3Winners, winner]);

  const displayBracket = () => {
    if (restaurants.length === 16) {
      return (
        <Sixteen
          restaurants={restaurants}
          setRound1Winners={setRound1Winners}
        />
      );
    } else if (restaurants.length === 8) {
      return <Eight restaurants={restaurants} setRound2Winners={setRound2Winners} />;
    } else if (restaurants.length === 4) {
      return <Four restaurants={restaurants} setRound3Winners={setRound3Winners} />;
    } else if (restaurants.length === 2) {
      return <Two restaurants={restaurants} setWinner={setWinner} />;
    } else if (restaurants.length === 1) {
      return <h1 className='text-4xl text-green text-center'>{winner}</h1>;
    }
  };

  return (
    <div className="flex justify-center p-2 h-full">
      {restaurants.length > 0 ? displayBracket() : 'No Bracket Set'}
    </div>
  );
}

export default Bracket;
