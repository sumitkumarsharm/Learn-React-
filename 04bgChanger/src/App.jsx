import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("black")
  return (
    <div className='w-full bg-slate-500 h-screen'
    style={{backgroundColor:color}}>
    
            <div class="bg-cyan-500 flex gap-6 rounded-2xl flex-wrap">
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('green')}>Green</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('Blue')}>Blue</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('Red')}>Red</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('Yellow')}>Yellow</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('Blue')}>Blue</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('cyan')}>oliv</button>
                <button className="border-2 border-black-600 px-4 rounded-2xl" onClick={()=> setcolor('gray')}>Gray</button>
            </div>
        </div>
    
 
  )
}

export default App
