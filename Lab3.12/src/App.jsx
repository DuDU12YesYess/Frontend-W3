import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list,setList] = useState(["Task1","Task2","Task3"])
  const [input,setInput] = useState("")
  const addItem = ()=>{
    setList([...list,input])
    setInput("")
  }
  const deleteItem = (ind) =>{
    setList(list.filter((_,index)=>ind!==index))
  }
  function TodoItem({text,onRemove}){
    return(
      <li>
        {text}<button onClick={onRemove}>Delete</button>
      </li>
    )
  }
  return (
    <div className='App'>
      <h1>List</h1>
      <div>
        <input value={input} placeholder='Enter the item to add' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {list.map((val,index)=>
            <TodoItem text={val} onRemove={()=>deleteItem(index)} />
          )}
      </ul>
    </div>
  )
}

export default App

