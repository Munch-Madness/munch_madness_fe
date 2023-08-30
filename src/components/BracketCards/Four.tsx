import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';

interface Props {
  bracketRestaurants: string[];
  setRound3Winners: Function;
}

function Four({ bracketRestaurants, setRound3Winners }: Props) {
  const [game1Winner, setGame1Winner] = useState('TBD');
  const [game2Winner, setGame2Winner] = useState('TBD');

  useEffect(() => {
    if (
      game1Winner !== 'TBD' &&
      game2Winner !== 'TBD'
    ) {
      setRound3Winners([
        game1Winner,
        game2Winner,
    ])}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game1Winner,
    game2Winner,
  ]);

  return (
    <>
      <div className="round">
        <div className="matchup-container three">
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
        <div className="matchup-container three">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{bracketRestaurants[2]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{bracketRestaurants[3]}</p>
          </div>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container four">
          <p className={game1Winner === 'TBD' ? 'text-primary' : 'text-green'}>
            {game1Winner}
          </p>
          <div className="spacer"></div>
          <p className={game2Winner === 'TBD' ? 'text-primary' : 'text-green'}>
            {game2Winner}
          </p>
        </div>
      </div>
    </>
  );
}

export default Four;
