import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;

  let [counter, setCounter] = useState(5)

  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter - 1);
  }

  

  return (
    <>
    <h1>Hello there  ...</h1>
    <h2> count : {counter}</h2>
    <button onClick={addValue}> Increase </button>
    <button onClick={removeValue}> Decrease </button>
    </>
  )
}

export default App
