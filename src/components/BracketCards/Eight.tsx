import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';
import { RestaurantModal } from '../Modal/Modal';
interface Props {
  bracketRestaurants: {attributes:{name: string}}[];
  setRound2Winners: Function;
}

function Eight({ bracketRestaurants, setRound2Winners }: Props) {
  const [game2winner, setGame2Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game1winner, setGame1Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game3winner, setGame3Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game4winner, setGame4Winner] = useState<string | {attributes:{name: string}}>('TBD');

  useEffect(() => {
    if (
      game1winner !== 'TBD' &&
      game2winner !== 'TBD' &&
      game3winner !== 'TBD' &&
      game4winner !== 'TBD'
    ) {
      setRound2Winners([
        game1winner,
        game2winner,
        game3winner,
        game4winner,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game1winner,
    game2winner,
    game3winner,
    game4winner,
  ]);

  return (
    <>
      <div className="round">
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[0])}
            />
            <p className="team text-primary">{bracketRestaurants[0].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[0]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[1])}
            />
            <p className="team text-primary">{bracketRestaurants[1].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[1]} />
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{bracketRestaurants[2].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[2]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{bracketRestaurants[3].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[3]} />
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[4])}
            />
            <p className="team text-primary">{bracketRestaurants[4].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[4]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[5])}
            />
            <p className="team text-primary">{bracketRestaurants[5].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[5]} />
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[6])}
            />
            <p className="team text-primary">{bracketRestaurants[6].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[6]} />
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary mr-2 shrink-0 border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[7])}
            />
            <p className="team text-primary">{bracketRestaurants[7].attributes.name}</p>
            <RestaurantModal data={bracketRestaurants[7]} />
          </div>
        </div>
      </div>
      <div className="future-round">
        <div className="matchup-container three">
        <p className={game1winner === 'TBD' ? 'text-primary' : 'text-green truncate p-1'} >{typeof game1winner === 'string' ? game1winner: game1winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game2winner === 'TBD' ? 'text-primary' : 'text-green truncate p-1'} >{typeof game2winner === 'string' ? game2winner: game2winner.attributes.name}</p>
        </div>
        <div className="matchup-container three">
        <p className={game3winner === 'TBD' ? 'text-primary' : 'text-green truncate p-1'} >{typeof game3winner === 'string' ? game3winner: game3winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game4winner === 'TBD' ? 'text-primary' : 'text-green truncate p-1'} >{typeof game4winner === 'string' ? game4winner: game4winner.attributes.name}</p>
        </div>
      </div>
      <div className="future-round">
        <div className="matchup-container four">
          <p className="team">TBD</p>
          <div className="spacer"></div>
          <p className="team">TBD</p>
        </div>
      </div>
    </>
  );
}

export default Eight;
