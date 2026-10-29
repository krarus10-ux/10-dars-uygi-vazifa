import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          1 ++ 
        </button><p>
          
          {count}</p>
       </>)
}

export default App
