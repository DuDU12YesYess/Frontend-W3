import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text,setText] = useState("");
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <p>You are typing: {text}</p>
    </div>
    
  )
}

export default App
