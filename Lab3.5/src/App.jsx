import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoItem() {
  return <li>A single task</li>
}
  function App(){
    return (
      <div>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    )
  }


export default App
