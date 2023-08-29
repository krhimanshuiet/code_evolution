import React, { useMemo, useState } from 'react'

const Use_memo = () => {
  const [counterOne , setCounterOne] = useState(0);
  const [counterTwo , setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    // for(let i = 0; i < 10000000 ; i++){

    // }
    return counterOne % 2 === 0;
  },[counterOne])

  const incrementOne = () => {
    setCounterOne(counterOne+1);
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo+1);
  }
  return (
    <>
    <div>use_memo</div>
    <button className='bg-yellow-300 hover:bg-pink-200 px-2 py-1 rounded-lg ml-2' onClick={incrementOne}>Count One {counterOne}</button>
    <span>{isEven ? 'Even' : 'Odd'}</span>
    <button className='bg-yellow-300 hover:bg-pink-200 px-2 py-1 rounded-lg ml-2' onClick={incrementTwo}>Count Two {counterTwo}</button>
    </>
  )
}

export default Use_memo