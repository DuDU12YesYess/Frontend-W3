import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  const deleteTask = (index) => {
    set(list.filter((_, i) => i !== index))
  }
function App() {

  return (
   <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default App
