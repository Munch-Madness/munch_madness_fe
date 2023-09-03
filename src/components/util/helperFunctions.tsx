export function truncateString(inputString: string) {
  if (inputString.length > 20) {
    return inputString.slice(0, 20) + '...';
  } else {
    return inputString;
  }
}

export function renderPrice(price: number) {
  if (price === 1) {
    return '$';
  } else if (price === 2) {
    return '$$';
  } else if (price === 3) {
    return '$$$';
  } else if (price === 4) {
    return '$$$$';
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
  if (website.length > 0) {
    return (
      <a href={website} target="_blank" rel="noreferrer">
        {website}
      </a>
    );
  } else {
    return <p>'No website data'</p>;
  }
}

export function renderAddress(address: string) {
  if (address.length > 0) {
    return address;
  } else {
    return 'No address data';
  }
}

export const validateZip = (str: string) => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const zip = str.split('')
  return zip.every(num => nums.includes(num))
}