import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(30)
  const IncreaseVal =()=>{
    if(counter === 30){
    }else{
      counter++;
      setCounter(counter)
    }
  }
  const DecreaseVal =()=>{
    if(counter === 0){
    }else{
      counter--;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai Aur React </h1>
      <h2>Counter value : {counter}</h2>

      <div className='divbutton'>
      <button onClick={IncreaseVal}>Increase Value</button>
      <button onClick={DecreaseVal}>Decrease Value</button>
      </div>
    </>
  )
}

export default App
