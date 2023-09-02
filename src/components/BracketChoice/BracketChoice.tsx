
interface Props {
  setBracketSize: Function,
  setZipCode: Function,
  zipCode: string,
}

export const BracketChoice = ({setZipCode, setBracketSize, zipCode}: Props ) => {

  function handleClick(e: any, size: number) {
    e.preventDefault()
    setBracketSize(size)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-3xl text-primary text-center'>Enter Your Zip Code</h1>
      <input className='text-3xl text-background text-center valid:bg-green' type='text' placeholder='Enter Zip Code' required minLength={5} maxLength={5} value={zipCode} onChange={(e) => setZipCode(e.target.value)}></input>
      <h1 className='text-3xl text-primary text-center' >Choose Your Bracket Size</h1>
      <p className='text-xl text-primary text-center'>How many restaurants do you want to compare?</p>
      <div className='flex justify-center content-center'>
        <button disabled={zipCode.length === 5 ? false : true} className='bg-primary text-4xl rounded-lg p-2 m-2 w-16 h-16 disabled:bg-red disabled:opacity-20 hover:scale-110 hover:ease-in-out transition duration-500 md:w-32 md:h-32' onClick={(e) => {handleClick(e, 16)}}>16</button>
        <button disabled={zipCode.length === 5 ? false : true} className='bg-primary text-4xl rounded-lg p-2 m-2 w-16 h-16 disabled:bg-red disabled:opacity-20 hover:scale-110 hover:ease-in-out transition duration-500 md:w-32 md:h-32' onClick={(e) => {handleClick(e, 8)}}>8</button>
        <button disabled={zipCode.length === 5 ? false : true} className='bg-primary text-4xl rounded-lg p-2 m-2 w-16 h-16 disabled:bg-red disabled:opacity-20 hover:scale-110 hover:ease-in-out transition duration-500 md:w-32 md:h-32' onClick={(e) => {handleClick(e, 4)}}>4</button>
        <button disabled={zipCode.length === 5 ? false : true} className='bg-primary text-4xl rounded-lg p-2 m-2 w-16 h-16 disabled:bg-red disabled:opacity-20 hover:scale-110 hover:ease-in-out transition duration-500 md:w-32 md:h-32' onClick={(e) => {handleClick(e, 2)}}>2</button>
      </div>
    </div>
  )
}