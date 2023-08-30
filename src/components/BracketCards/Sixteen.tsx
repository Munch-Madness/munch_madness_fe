import React, { useState, useEffect } from 'react';
import { PiMedalFill } from 'react-icons/pi';

interface Props {
  bracketRestaurants: string[];
  setRound1Winners: Function;
}

function Sixteen({ bracketRestaurants, setRound1Winners }: Props) {
  const [game1winner, setGame1Winner] = useState('TBD');
  const [game2winner, setGame2Winner] = useState('TBD');
  const [game3winner, setGame3Winner] = useState('TBD');
  const [game4winner, setGame4Winner] = useState('TBD');
  const [game5winner, setGame5Winner] = useState('TBD');
  const [game6winner, setGame6Winner] = useState('TBD');
  const [game7winner, setGame7Winner] = useState('TBD');
  const [game8winner, setGame8Winner] = useState('TBD');

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
            <p className="team text-primary">{bracketRestaurants[0]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame1Winner(bracketRestaurants[15])}
            />
            <p className="team text-primary">{bracketRestaurants[15]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[7])}
            />
            <p className="team text-primary">{bracketRestaurants[7]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame2Winner(bracketRestaurants[8])}
            />
            <p className="team text-primary">{bracketRestaurants[8]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[3])}
            />
            <p className="team text-primary">{bracketRestaurants[3]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame3Winner(bracketRestaurants[12])}
            />
            <p className="team text-primary">{bracketRestaurants[12]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[4])}
            />
            <p className="team text-primary">{bracketRestaurants[4]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame4Winner(bracketRestaurants[11])}
            />
            <p className="team text-primary">{bracketRestaurants[11]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame5Winner(bracketRestaurants[1])}
            />
            <p className="team text-primary">{bracketRestaurants[1]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame5Winner(bracketRestaurants[14])}
            />
            <p className="team text-primary">{bracketRestaurants[14]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame6Winner(bracketRestaurants[6])}
            />
            <p className="team text-primary">{bracketRestaurants[6]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame6Winner(bracketRestaurants[9])}
            />
            <p className="team text-primary">{bracketRestaurants[9]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame7Winner(bracketRestaurants[2])}
            />
            <p className="team text-primary">{bracketRestaurants[2]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame7Winner(bracketRestaurants[13])}
            />
            <p className="team text-primary">{bracketRestaurants[13]}</p>
          </div>
        </div>
        <div className="matchup-container one">
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame8Winner(bracketRestaurants[5])}
            />
            <p className="team text-primary">{bracketRestaurants[5]}</p>
          </div>
          <div className="spacer"></div>
          <div className="flex justify-between items-center">
            <PiMedalFill
              className="text-primary border border-white bg-background h-5 w-5 hover:cursor-pointer hover:invert hover:bg-magenta hover:ease-in-out transition duration-500"
              onClick={() => setGame8Winner(bracketRestaurants[10])}
            />
            <p className="team text-primary">{bracketRestaurants[10]}</p>
          </div>
        </div>
      </div>
      <div className="round">
        <div className="matchup-container two">
          <p className={game1winner === 'TBD' ? 'text-primary' : 'text-green'} >{game1winner}</p>
          <div className="spacer"></div>
          <p className={game2winner === 'TBD' ? 'text-primary' : 'text-green'} >{game2winner}</p>
        </div>
        <div className="matchup-container two">
          <p className={game3winner === 'TBD' ? 'text-primary' : 'text-green'} >{game3winner}</p>
          <div className="spacer"></div>
          <p className={game4winner === 'TBD' ? 'text-primary' : 'text-green'} >{game4winner}</p>
        </div>
        <div className="matchup-container two">
          <p className={game5winner === 'TBD' ? 'text-primary' : 'text-green'} >{game5winner}</p>
          <div className="spacer"></div>
          <p className={game6winner === 'TBD' ? 'text-primary' : 'text-green'} >{game6winner}</p>
        </div>
        <div className="matchup-container two">
          <p className={game7winner === 'TBD' ? 'text-primary' : 'text-green'} >{game7winner}</p>
          <div className="spacer"></div>
          <p className={game8winner === 'TBD' ? 'text-primary' : 'text-green'} >{game8winner}</p>
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
