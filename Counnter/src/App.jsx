import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [counter, setCouner] = useState(15)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-white">
        Hello world!
      </h1>

      <p className='text-white'> Counter value is : {counter} </p>
      <button onClick={() => setCouner(counter+1)} className='text-white px-4 py-3 border rounded-lg'>Increment counter</button><br>
      </br>
      <button onClick={() => setCouner(counter-1)} className='text-white px-4 py-3 border rounded-lg'>Decrement counter </button>
    </>
  )
}

export default App
