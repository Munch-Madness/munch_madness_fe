import { AiOutlineDollarCircle } from 'react-icons/ai';

export function truncateString(inputString: string) {
  if (inputString.length > 14) {
    return inputString.slice(0, 14) + '...';
  } else {
    return inputString;
  }
}

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
        <button className="border border-solid p-1 border-green rounded text-green hover:bg-green hover:text-background hover:border-background">Visit Website</button>
      </a>
    );
  } else {
    return <p>'No website data'</p>;
  }
}

export function renderAddress(address: string, name: string) {
  let urlAddress = `${address.replace(/\s/g, '+')}+${name.replace(/\s/g, '+')}`;
  if (address.length > 0) {
    return <a href={`http://maps.google.com/maps?q=${urlAddress}`} target="_blank" rel="noreferrer"><button className='border border-solid p-1 border-green rounded text-green hover:bg-green hover:text-background hover:border-background'>{address}</button></a>
  } else {
    return 'No address data';
  }
}