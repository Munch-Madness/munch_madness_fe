import React, { useState, useEffect } from 'react';
import Sixteen from '../BracketCards/Sixteen';
import Eight from '../BracketCards/Eight';
import Four from '../BracketCards/Four';
import Two from '../BracketCards/Two';
import {
  zagLa,
  andOne,
  ColdBlooded,
  DoubleOT,
  HeartBreakCity,
  Holloway,
  JeromePt2,
  SendItJerome,
  Oh,
  Miracles,
  RattlesIt,
  SlipperStillFits,
  ThisIsMarchMadness,
  Unbelievable,
} from '../../sounds';
import useSound from 'use-sound';
import {
  renderPrice,
  renderRating,
  renderWebsite,
  renderAddress,
} from '../util/helperFunctions';

interface Props {
  setBracketSize: Function;
  bracketRestaurants: { attributes: { name: string } }[];
  setBracketRestaurants: Function;
  setReadyToPlay: Function;
}

function Bracket({
  setBracketSize,
  bracketRestaurants,
  setBracketRestaurants,
  setReadyToPlay,
}: Props) {
  const [round2Winners, setRound2Winners]: any = useState([]);
  const [round1Winners, setRound1Winners]: any = useState([]);
  const [round3Winners, setRound3Winners]: any = useState([]);
  const [winner, setWinner]: any = useState('');
  const [soundOn, setSoundOn] = useState(false);

  let sounds = [
    zagLa,
    andOne,
    ColdBlooded,
    DoubleOT,
    HeartBreakCity,
    Holloway,
    JeromePt2,
    SendItJerome,
    Oh,
    Miracles,
    RattlesIt,
    SlipperStillFits,
    ThisIsMarchMadness,
    Unbelievable,
  ];

  const [play, { stop }] = useSound(
    sounds[Math.floor(Math.random() * sounds.length)],
    { volume: 0.5 }
  );

  useEffect(() => {
    if (!soundOn) {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundOn]);

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
      if (soundOn) {
        play();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round1Winners, round2Winners, round3Winners, winner]);

  const resetGame = () => {
    setBracketSize(0);
    setBracketRestaurants([]);
    setReadyToPlay(false);
  };

  const displayBracket = () => {
    if (bracketRestaurants.length === 16) {
      return (
        <Sixteen
          bracketRestaurants={bracketRestaurants}
          setRound1Winners={setRound1Winners}
        />
      );
    } else if (bracketRestaurants.length === 8) {
      return (
        <Eight
          bracketRestaurants={bracketRestaurants}
          setRound2Winners={setRound2Winners}
        />
      );
    } else if (bracketRestaurants.length === 4) {
      return (
        <Four
          bracketRestaurants={bracketRestaurants}
          setRound3Winners={setRound3Winners}
        />
      );
    } else if (bracketRestaurants.length === 2) {
      return (
        <Two bracketRestaurants={bracketRestaurants} setWinner={setWinner} />
      );
    } else if (bracketRestaurants.length === 1) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-green text-center">
            {winner.attributes.name}
          </h1>
          <img src={winner.attributes.photo} alt={winner.attributes.name} />
          <div className="flex flex-row justify-between w-full">
            <p className="flex items-center text-primary">Price: {renderPrice(winner.attributes.price)}</p>
            <p className='text-primary'>Rating: {renderRating(winner.attributes.rating)}</p>
          </div>
          <p className="m-4">{renderWebsite(winner.attributes.website)}</p>
          <p>
            {renderAddress(winner.attributes.address, winner.attributes.name)}
          </p>
          <button
            className="text-green border rounded p-2 m-4 hover:bg-green hover:text-background transition duration-500"
            onClick={() => resetGame()}
          >
            Go Again?
          </button>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center p-2 h-min md:w-3/5 w-full">
      <button
        className="absolute top-1 left-1 border border-solid px-1 border-green rounded text-green hover:bg-green hover:text-background hover:border-background"
        onClick={() => setSoundOn(!soundOn)}
      >
        {soundOn ? <p>Unmuted</p> : <p>Muted</p>}
      </button>
      {bracketRestaurants.length > 0 ? displayBracket() : 'No Bracket Set'}
    </div>
  );
}

export default Bracket;
