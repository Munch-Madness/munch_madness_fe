import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';
interface Props {
  bracketRestaurants: {attributes:{name: string}}[];
  setRound2Winners: Function;
}

function Eight({ bracketRestaurants, setRound2Winners }: Props) {
  const [game1Winner, setGame1Winner]:any = useState('TBD');
  const [game2Winner, setGame2Winner]:any = useState('TBD');
  const [game3Winner, setGame3Winner]:any = useState('TBD');
  const [game4Winner, setGame4Winner]:any = useState('TBD');

  useEffect(() => {
    if (
      game1Winner !== 'TBD' &&
      game2Winner !== 'TBD' &&
      game3Winner !== 'TBD' &&
      game4Winner !== 'TBD'
    ) {
      setRound2Winners([
        game1Winner,
        game2Winner,
        game3Winner,
        game4Winner,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game1Winner,
    game2Winner,
    game3Winner,
    game4Winner,
  ]);

  return (
    <>
      <div className="round">
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[0])}
            />
            <p className="team text-primary">{bracketRestaurants[0].attributes.name}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[1])}
            />
            <p className="team text-primary">{bracketRestaurants[1].attributes.name}</p>
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{bracketRestaurants[2].attributes.name}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{bracketRestaurants[3].attributes.name}</p>
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[4])}
            />
            <p className="team text-primary">{bracketRestaurants[4].attributes.name}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[5])}
            />
            <p className="team text-primary">{bracketRestaurants[5].attributes.name}</p>
          </div>
        </div>
        <div className="matchup-container two">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[6])}
            />
            <p className="team text-primary">{bracketRestaurants[6].attributes.name}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[7])}
            />
            <p className="team text-primary">{bracketRestaurants[7].attributes.name}</p>
          </div>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container three">
          <p className={game1Winner === 'TBD' ? 'text-primary' : 'text-green'} >{game1Winner}</p>
          <div className="spacer"></div>
          <p className={game2Winner === 'TBD' ? 'text-primary' : 'text-green'} >{game2Winner}</p>
        </div>
        <div className="matchup-container three">
          <p className={game3Winner === 'TBD' ? 'text-primary' : 'text-green'} >{game3Winner}</p>
          <div className="spacer"></div>
          <p className={game4Winner === 'TBD' ? 'text-primary' : 'text-green'} >{game4Winner}</p>
        </div>
      </div>
      <div className="round">
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
