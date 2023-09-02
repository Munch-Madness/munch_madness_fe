import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';
import { truncateString } from '../util/helperFunctions';

interface Props {
  bracketRestaurants: {attributes:{name: string}}[];
  setRound1Winners: Function;
}

function Sixteen({ bracketRestaurants, setRound1Winners }: Props) {
  const [game2winner, setGame2Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game1winner, setGame1Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game3winner, setGame3Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game4winner, setGame4Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game5winner, setGame5Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game6winner, setGame6Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game7winner, setGame7Winner] = useState<string | {attributes:{name: string}}>('TBD');
  const [game8winner, setGame8Winner] = useState<string | {attributes:{name: string}}>('TBD');

  useEffect(() => {
    if (
      game1winner !== 'TBD' &&
      game2winner !== 'TBD' &&
      game3winner !== 'TBD' &&
      game4winner !== 'TBD' &&
      game5winner !== 'TBD' &&
      game6winner !== 'TBD' &&
      game7winner !== 'TBD' &&
      game8winner !== 'TBD'
    ) {
      setRound1Winners([
        game1winner,
        game2winner,
        game3winner,
        game4winner,
        game5winner,
        game6winner,
        game7winner,
        game8winner,
      ]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    game1winner,
    game2winner,
    game3winner,
    game4winner,
    game5winner,
    game6winner,
    game7winner,
    game8winner,
  ]);

 
  return (
    <>
      <div className="round">
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[0])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[0].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[15])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[15].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[7])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[7].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[8])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[8].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[3].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[12])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[12].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[4])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[4].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[11])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[11].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame5Winner(bracketRestaurants[1])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[1].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame5Winner(bracketRestaurants[14])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[14].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame6Winner(bracketRestaurants[6])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[6].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame6Winner(bracketRestaurants[9])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[9].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame7Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[2].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame7Winner(bracketRestaurants[13])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[13].attributes.name)}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame8Winner(bracketRestaurants[5])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[5].attributes.name)}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame8Winner(bracketRestaurants[10])}
            />
            <p className="team text-primary">{truncateString(bracketRestaurants[10].attributes.name)}</p>
          </div>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container two">
          <p className={game1winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game1winner === 'string' ? game1winner: game1winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game2winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game2winner === 'string' ? game2winner: game2winner.attributes.name}</p>
        </div>
        <div className="matchup-container two">
          <p className={game3winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game3winner === 'string' ? game3winner: game3winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game4winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game4winner === 'string' ? game4winner: game4winner.attributes.name}</p>
        </div>
        <div className="matchup-container two">
          <p className={game5winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game5winner === 'string' ? game5winner: game5winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game6winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game6winner === 'string' ? game6winner: game6winner.attributes.name}</p>
        </div>
        <div className="matchup-container two">
          <p className={game7winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game7winner === 'string' ? game7winner: game7winner.attributes.name}</p>
          <div className="spacer"></div>
          <p className={game8winner === 'TBD' ? 'text-primary' : 'text-green'} >{typeof game8winner === 'string' ? game8winner: game8winner.attributes.name}</p>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container three">
          <p className="team text-primary">TBD</p>
          <div className="spacer"></div>
          <p className="team text-primary">TBD</p>
        </div>
        <div className="matchup-container three">
          <p className="team text-primary">TBD</p>
          <div className="spacer"></div>
          <p className="team text-primary">TBD</p>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container four">
          <p className="team text-primary">TBD</p>
          <div className="spacer"></div>
          <p className="team text-primary">TBD</p>
        </div>
      </div>
    </>
  );
}

export default Sixteen;
