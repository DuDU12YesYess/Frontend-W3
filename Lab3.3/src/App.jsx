import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = ["Learn JSX","Create Components","Master State"];
  return (
    <div>
      <h1>My Task list</h1>
      <ul>
        <li>tasks[0]</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
      </ul>
    </div>
  )
}

export default App
