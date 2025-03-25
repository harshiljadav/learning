import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  
  let [password, setpassword] = useState('');
  let [length, setLength] = useState(8);
  let [isNumberAllowed, setIsNumberAllowed] = useState(false);
  let [isSpecialAllowed, setIsSpecialAllowed] = useState(false);

  let generatePassword = useCallback(function() {
    password = '';
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (isNumberAllowed) (str +='1234567890');
    if (isSpecialAllowed) (str +='!@#$%^&*()_+{}:"<>?[];,\'\\./');

    for (let i = 0; i < length; i++) {
      let index = Math.floor((Math.random() * str.length));
      password += str.charAt(index);
    }
    setpassword(password);
    console.log(password);
  }, [isNumberAllowed, isSpecialAllowed, setpassword, length])

  useEffect(() => {
    generatePassword()
  }, [length, isNumberAllowed, isSpecialAllowed])

  return (
    <>
      <input type="text text-white" readOnly value={password}/>
      <button onClick={() => generatePassword(length)}>click me</button>
      <input type="checkbox" onClick={() =>  setIsNumberAllowed (!isNumberAllowed) } value='Number' />
      <input type="checkbox" onClick={() =>  setIsSpecialAllowed (!isSpecialAllowed) } value='spacial char'/>
      <input type="range" min='2' max='20' value={length} onChange={(e) => setLength(e.target.value)}/>
    </>
  )
}

export default App
