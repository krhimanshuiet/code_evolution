import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered , reStocked } from './cakeSlice'
const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2 className="text-black font-bold text-3xl">Number of Cakes - {numOfCakes} </h2>
        <button className='bg-yellow-300 m-1 font-light  px-2 py-1 text-xl rounded-lg' onClick={() => dispatch(ordered())}>order cake</button>
        <button className='bg-green-300 m-1 font-light px-2 py-1 text-xl rounded-lg' onClick={() => dispatch(reStocked(5))}>restock cake</button>
    </div>
  )
}

export default CakeView