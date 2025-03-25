import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor, setbgcolor] = useState('grey')

  return (
    <>
      <div className="w-full h-screen bg-black text-center text-white" style={{backgroundColor: bgcolor}}>
        <div className='absolute bottom-4 left-auto justify-center text-center'> 
          <button onClick={() => setbgcolor('red')} className='m-4 p-4 rounded-xl border-e bg-red-400'>red</button>
          <button onClick={() => setbgcolor('green')} className='m-4 p-4 rounded-xl border-e bg-green-400'>Green </button>
          <button onClick={() => setbgcolor('blue')} className='m-4 p-4 rounded-xl border-e bg-blue-400'>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App