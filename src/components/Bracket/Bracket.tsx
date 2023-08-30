import React, { useState, useEffect } from 'react';
import Sixteen from '../BracketCards/Sixteen';
import Eight from '../BracketCards/Eight';
import Four from '../BracketCards/Four';
import Two from '../BracketCards/Two';

interface Props {
  setBracketSize: Function;
  bracketRestaurants: string[];
  setBracketRestaurants: Function;
  setSelected: Function;
}

function Bracket({setBracketSize, bracketRestaurants, setBracketRestaurants, setSelected}: Props) {
  // const [bracketRestaurants, setBracketRestaurants] = useState([
  //   'Omakase',
  //   'Freebirds',
  //   'Wendys',
  //   'Dennys',
  //   'McDonalds',
  //   'Taco Bell',
  //   'Burger King',
  //   'Chipotle',
  //   'Applebees',
  //   'Taco Star',
  //   'Red Robin',
  //   'Red Lobster',
  //   'Ruths Chris',
  //   'Burgerville',
  //   'iHop',
  //   'Cheba Hut',
  // ]);
  // 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut', 'Applebees', 'Taco Star', 'Red Robin', 'Red Lobster', 'McDonalds', 'Taco Bell', 'iHop', 'Cheba Hut'
  //fetch will go here and use setBracketRestaurants to set the state of the bracketRestaurants array and use bracketSize to fetch the right number of bracketRestaurants
  const [round1Winners, setRound1Winners] = useState([]);
  const [round2Winners, setRound2Winners] = useState([]);
  const [round3Winners, setRound3Winners] = useState([]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (round1Winners.length === 8) {
      setBracketRestaurants(round1Winners);
    }
    if (round2Winners.length === 4) {
      setBracketRestaurants(round2Winners);
    }
    if (round3Winners.length === 2) {
      setBracketRestaurants(round3Winners);
    }
    if (winner !== '') {
      setBracketRestaurants([winner]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round1Winners, round2Winners, round3Winners, winner]);

  const resetGame = () => {
    setBracketSize(0)
    setBracketRestaurants([])
    setSelected(false)
  }

  const displayBracket = () => {
    if (bracketRestaurants.length === 16) {
      return (
        <Sixteen
          bracketRestaurants={bracketRestaurants}
          setRound1Winners={setRound1Winners}
        />
      );
    } else if (bracketRestaurants.length === 8) {
      return <Eight bracketRestaurants={bracketRestaurants} setRound2Winners={setRound2Winners} />;
    } else if (bracketRestaurants.length === 4) {
      return <Four bracketRestaurants={bracketRestaurants} setRound3Winners={setRound3Winners} />;
    } else if (bracketRestaurants.length === 2) {
      return <Two bracketRestaurants={bracketRestaurants} setWinner={setWinner} />;
    } else if (bracketRestaurants.length === 1) {
      return <div className='flex flex-col'>
        <h1 className='text-4xl text-green text-center'>{winner}</h1>
        <button className='text-green border rounded p-2 m-4 hover:bg-green hover:text-background transition duration-250' onClick={() => resetGame()}>Go Again?</button>
      </div>;
    }
  };

  return (
    <div className="flex justify-center p-2 h-full">
      {bracketRestaurants.length > 0 ? displayBracket() : 'No Bracket Set'}
    </div>
  );
}

export default Bracket;
