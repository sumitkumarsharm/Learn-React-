import { useState } from 'react'
import './App.css'
import { Card } from './components/card'

function App() {

  return (
    <>
     <h1 className=' font-extrabold mb-5 bg-green-500 p-4 rounded-xl cursor-pointer'>Hello Tailwind</h1>
     <Card username = "Aman"/>
     <Card username = "Rahul"/>
    </>
  )
}

export default App
