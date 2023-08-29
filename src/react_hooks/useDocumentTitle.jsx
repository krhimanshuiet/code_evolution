// import React, { useEffect, useState } from 'react'

// const useDocumentTitle = () => {
//     const [count , setCount] = useState(0)
//     useEffect(() => {
//         document.title = `Count ${count}`
//     },[count])
//   return (
//     <div>
//         <button onClick={() => setCount(count + 1)}>Count - {count}</button>
//     </div>
//   )
// }

// export default useDocumentTitle

import { useEffect, useState} from 'react'

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count is ${count}`
    },[count])

}






const DocumentTitle = () => {
    const [count , setCount] = useState(0)
    useDocumentTitle(count);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  )
}

export default DocumentTitle