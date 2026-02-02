import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list,setList]=useState(["Task1","Task2","Task3"])
  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index))
  }
  return (
    <div className = "App">
      <ul>
        {list.map((valu, index) => (
          <li key={index}>
            {valu}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
