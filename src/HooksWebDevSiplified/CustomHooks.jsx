import React  from 'react'
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

function CustomHooks() {
    const [value , setValue] = useLocalStorage("name" , '');
    useUpdateLogger(value)
  return (
    <div>
      <input
      value={value}
      type='text'
      onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default CustomHooks
