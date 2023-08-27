
interface Props {
  setBracketSize: Function,
}

export const BracketChoice = ({setBracketSize}: Props ) => {

  function handleClick(e: any, size: number) {
    e.preventDefault()
    setBracketSize(size)
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className='text-3xl text-primary text-center' >Choose Your Bracket Size</h1>
      <p className='text-xl text-primary text-center'>How many restaurants do you want to compare?</p>
      <div className='flex justify-center content-center'>
        <button className='bg-primary text-4xl rounded-lg p-2 m-2 w-32 h-32 hover:scale-110 hover:ease-in-out transition duration-250' onClick={(e) => {handleClick(e, 16)}}>16</button>
        <button className='bg-primary text-4xl rounded-lg p-2 m-2 w-32 h-32 hover:scale-110 hover:ease-in-out transition duration-250' onClick={(e) => {handleClick(e, 8)}}>8</button>
        <button className='bg-primary text-4xl rounded-lg p-2 m-2 w-32 h-32 hover:scale-110 hover:ease-in-out transition duration-250' onClick={(e) => {handleClick(e, 4)}}>4</button>
        <button className='bg-primary text-4xl rounded-lg p-2 m-2 w-32 h-32 hover:scale-110 hover:ease-in-out transition duration-250' onClick={(e) => {handleClick(e, 2)}}>2</button>
      </div>
    </div>
  )
}