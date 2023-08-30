import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';

interface Props {
  bracketRestaurants: string[];
  setWinner: Function;
}

function Two({ bracketRestaurants, setWinner }: Props) {
  const [game1Winner, setGame1Winner] = useState('TBD');

  useEffect(() => {
    if (game1Winner !== 'TBD') {
      setWinner([game1Winner]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game1Winner]);

  return (
    <div className="round">
      <div className="matchup-container four">
        <div className="flex justify-between items-center">
          <PiMedalFill
            className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
            onClick={() => setGame1Winner(bracketRestaurants[0])}
          />
          <p className="team text-primary">{bracketRestaurants[0]}</p>
        </div>
        <div className="spacer"></div>
        <div className="flex justify-between items-center">
          <PiMedalFill
            className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
            onClick={() => setGame1Winner(bracketRestaurants[1])}
          />
          <p className="team text-primary">{bracketRestaurants[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default Two;
