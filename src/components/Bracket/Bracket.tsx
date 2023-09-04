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

const sounds = [
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

function Bracket({
  setBracketSize,
  bracketRestaurants,
  setBracketRestaurants,
  setReadyToPlay,
}: Props) {
  const [round2Winners, setRound2Winners] = useState([]);
  const [round1Winners, setRound1Winners] = useState([]);
  const [round3Winners, setRound3Winners] = useState([]);
  const [winner, setWinner] = useState<null | {
    attributes: {
      name: string;
      photo: string;
      website: string;
      address: string;
      rating: number;
      price: number;
    };
  }>(null);
  const [soundOn, setSoundOn] = useState(true);
  const [sound, setSound] = useState(
    sounds[Math.floor(Math.random() * sounds.length)]
  );

  const [play, { stop }] = useSound(sound, { volume: 0.4 });

  useEffect(() => {
    if (!soundOn) {
      stop();
    }
  }, [soundOn, stop]);

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
    if (winner !== null) {
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
    setWinner(null);
    setSound(sounds[Math.floor(Math.random() * sounds.length)]);
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
    } else if (winner !== null) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-green text-center">
            {winner.attributes.name}
          </h1>
          <img src={winner.attributes.photo} alt={winner.attributes.name} />
          <div className="flex flex-row justify-between w-full">
            <p className="flex items-center text-primary">
              Price: {renderPrice(winner.attributes.price)}
            </p>
            <p className="text-primary">
              Rating: {renderRating(winner.attributes.rating)}
            </p>
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
