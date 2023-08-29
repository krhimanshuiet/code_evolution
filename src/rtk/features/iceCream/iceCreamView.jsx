import React , {useState} from "react";
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './iceCreamSlice'
const IceCreamView = () => {
  const [value , setValue] = useState('')
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="text-black font-bold text-3xl">Number of Ice Cream - {noOfIceCreams}</h2>
      <button className='bg-yellow-300 px-2 py-1 m-1 font-light text-xl rounded-lg' onClick={() => dispatch(ordered())}>order icecream</button>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className='bg-green-300 px-2 py-1 m-1 font-light text-xl rounded-lg' onClick={() => dispatch(restocked(Number(value)))}>restock icecream</button>
    </div>
  );
};

export default IceCreamView;
