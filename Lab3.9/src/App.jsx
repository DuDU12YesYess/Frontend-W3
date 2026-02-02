import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState (["Eat", "Slepp", "Code"])
  return (
    <ul>
      {list.map((item, index) =>
        <li key={index}>{item}</li>
      )}
    </ul>
  )
}

export default App
