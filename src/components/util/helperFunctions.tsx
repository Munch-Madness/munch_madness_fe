

export function truncateString(inputString: string) {
  if (inputString.length > 20) {
    return inputString.slice(0, 20) + '...'
  } else {
    return inputString
  }
}