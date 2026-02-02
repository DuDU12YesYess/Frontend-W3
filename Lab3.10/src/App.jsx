import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { black } from 'colors'

function App() {
  const [isUrgent, setIsUrgent] = useState(false)
  return (
   <div style={{color: isUrgent? red : black}}>
    <h2>Task Status</h2>
    <button onClick={()=>setIsUrgent(!isUrgent)}>Toggle Urgency</button>
   </div>
  )
}

export default App
