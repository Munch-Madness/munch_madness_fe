import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';
import { RestaurantModal } from '../Modal/Modal';

interface Props {
  bracketRestaurants: {attributes:{name: string}}[];
  setRound3Winners: Function;
}

function Four({ bracketRestaurants, setRound3Winners }: Props) {
  const [game2winner, setGame2Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game1winner, setGame1Winner] = useState<string | {attributes:{name: string}}>('TBD');

  useEffect(() => {
    if (
      game1winner !== 'TBD' &&
      game2winner !== 'TBD'
    ) {
      setRound3Winners([
        game1winner,
        game2winner,
    ])}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game1winner,
    game2winner,
  ]);

  return (
    <>
      <div className="round">
        <div className="matchup-container three">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border mr-2 shrink-0 border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[0])}
            />
            <p className="team text-primary">{bracketRestaurants[0].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[0]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border mr-2 shrink-0 border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[1])}
            />
            <p className="team text-primary">{bracketRestaurants[1].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[1]} />
          </div>
        </div>
        <div className="matchup-container three">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border mr-2 shrink-0 border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{bracketRestaurants[2].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[2]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border mr-2 shrink-0 border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{bracketRestaurants[3].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[3]} />
          </div>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container four">
        <p className={game1winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game1winner === 'string' ? game1winner: game1winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game2winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game2winner === 'string' ? game2winner: game2winner.attributes.name}</p>
        </div>
      </div>
    </>
  );
}

export default Four;
