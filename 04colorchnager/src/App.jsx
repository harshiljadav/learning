import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen duration-900' style={{backgroundColor : color}}>
      <div>
        <button onClick={() => setColor('red')}>RED</button>
        <button onClick={() => setColor('green')}>grreen</button>
        <button onClick={() => setColor('blue')}>blue</button>
        <button onClick={() => setColor('orange')}>orage</button>
        <button onClick={() => setColor('purple')}>purple</button>
        <button onClick={() => setColor('black')}>black</button>
        <button onClick={() => setColor('white')}>white</button>
      </div>
    </div>
  )
}

export default App
