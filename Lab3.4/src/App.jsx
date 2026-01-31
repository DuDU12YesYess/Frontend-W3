import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = ["Learn JSX","Create Components","Master State"];
  return (
    <div>
      <h1>My Task List</h1>
      <p>Total Tasks: {tasks.length}</p>
      <ul>{tasks[0]}</ul>
      <ul>{tasks[1]}</ul>
      <ul>{tasks[2]}</ul>
    </div>
  )
}

export default App
