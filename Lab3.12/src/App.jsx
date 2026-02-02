import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function TodoItem ({text, onRemove}){
    return(
      <li>
        {text} <button onClick={onRemove}>Delete</button>
      </li>
    )
  }

  return (
  )
}

export default App
