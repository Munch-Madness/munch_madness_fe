import { AiOutlineDollarCircle } from 'react-icons/ai';
import { TacoBell, PizzaPizza, Whopper, ImLovinIt, Subway } from '../../sounds';

export function renderPrice(price: number) {
  if (price === 1) {
    return <div className='flex'><AiOutlineDollarCircle className='bg-green text-background ml-2 rounded-full' /><AiOutlineDollarCircle /><AiOutlineDollarCircle /><AiOutlineDollarCircle /></div>;
  } else if (price === 2) {
    return <div className='flex'><AiOutlineDollarCircle className='bg-green text-background ml-2 rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /><AiOutlineDollarCircle /><AiOutlineDollarCircle /></div>;
  } else if (price === 3) {
    return <div className='flex'><AiOutlineDollarCircle className='bg-green text-background ml-2 rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /><AiOutlineDollarCircle /></div>;
  } else if (price === 4) {
    return <div className='flex'><AiOutlineDollarCircle className='bg-green text-background ml-2 rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /><AiOutlineDollarCircle className='bg-green text-background rounded-full' /></div>;
  } else {
    return 'No price data';
  }
}

export function renderRating(rating: number) {
  if (Math.round(rating) === 1) {
    return '⭐️';
  } else if (Math.round(rating) === 2) {
    return '⭐️⭐️';
  } else if (Math.round(rating) === 3) {
    return '⭐️⭐️⭐️';
  } else if (Math.round(rating) === 4) {
    return '⭐️⭐️⭐️⭐️';
  } else if (Math.round(rating) === 5) {
    return '⭐️⭐️⭐️⭐️⭐️';
  } else {
    return 'No rating data';
  }
}

export function renderWebsite(website: string) {
  if (website?.length > 0) {
    return (
      <a href={website} target="_blank" rel="noreferrer">
        <button className="border border-solid p-2 border-green rounded text-green hover:bg-green hover:text-background hover:border-background transition duration-500">Visit Website</button>
      </a>
    );
  } else {
    return <p>'No website data'</p>;
  }
}

export function renderAddress(address: string, name: string) {
  let urlAddress = `${address.replace(/\s/g, '+')}+${name.replace(/\s/g, '+')}`;
  if (address.length > 0) {
    return <a href={`http://maps.google.com/maps?q=${urlAddress}`} target="_blank" rel="noreferrer"><button className='border border-solid p-2 border-green rounded text-green hover:bg-green hover:text-background hover:border-background transition duration-500'>{address}</button></a>
  } else {
    return 'No address data';
  }
}

export function playSound(trigger: string) {
  if (trigger.includes('taco')) {
    new Audio(TacoBell).play();
  }
  if (trigger.includes('pizza')) {
    new Audio(PizzaPizza).play();
  }
  if (trigger.includes('Burger King')) {
    new Audio(Whopper).play();
  }
  if (trigger.includes(`McDonald's`)) {
    new Audio(ImLovinIt).play();
  }
  if (trigger.includes('Subway')) {
    new Audio(Subway).play();
  }
}

export const validateZip = (str: string) => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const zip = str.split('')
  return zip.every(num => nums.includes(num))
}

export function checkRestaurants(fetchedRestaurants: [], setBracketSize: Function, setBracketMessage: Function, bracketSize: number) {
  if (fetchedRestaurants.length < 16 && fetchedRestaurants.length >= 8 && fetchedRestaurants.length < bracketSize) {
    setBracketSize(8)
    setBracketMessage('sorry your bracket size has been reset to 8 due to lack of restaurants in the area')
  } else if (fetchedRestaurants.length < 8 && fetchedRestaurants.length >= 4 && fetchedRestaurants.length < bracketSize) {
    setBracketSize(4)
    setBracketMessage('sorry your bracket size has been reset to 4 due to lack of restaurants in the area')
  } else if (fetchedRestaurants.length < 4 && fetchedRestaurants.length >= 2 && fetchedRestaurants.length < bracketSize) {
    setBracketSize(2)
    setBracketMessage('sorry your bracket size has been reset to 2 due to lack of restaurants in the area')
  } else if (fetchedRestaurants.length < 2 && fetchedRestaurants.length > 0 && fetchedRestaurants.length < bracketSize) {
    setBracketMessage('please move to a more popoulated area')
  } else if (fetchedRestaurants.length > 16) {
    return null
  }
}
// sort functions

export const sortRestaurants = (a: {attributes: {name: string}}, b: {attributes: {name: string}}) => {
  const nameA = a.attributes.name.toLowerCase();
  const nameB = b.attributes.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export const arrangeRestaurants = (bracketRestaurants: {attributes: {name: string}}[], fetchedRestaurants: {attributes: {name: string}}[]) => {
  const bracketNames = bracketRestaurants.map(restaurant => restaurant.attributes.name)
  const filteredRestaurants = fetchedRestaurants.filter(rest => {
    return !bracketNames.includes(rest.attributes.name)
  })
  const sortedBracket = bracketRestaurants.sort(sortRestaurants)
  const sortedFetched = filteredRestaurants.sort(sortRestaurants)
console.log(sortedFetched.map(index => index.attributes.name))
return [...sortedBracket, ...filteredRestaurants]
}