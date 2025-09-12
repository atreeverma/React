import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  //let counter=5;
  const addValue=()=>{
      //console.log(counter);
      counter=counter+1//UI updation
      setCounter(counter)
  }
  const removevalue=()=>{
    //counter--
    setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur react  </h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App
