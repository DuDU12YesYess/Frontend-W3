import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoItem() {
  return (
    <li>Tasks</li>
  )
}
function TodoList(){
  return(
    <ul>
      <TodoItem />
      <TodoItem />
    </ul>
  )
}
function App(){
  return(
    <div>
      <h1>My App</h1>
      <TodoList />
      
    </div>
  )
}

export default App
