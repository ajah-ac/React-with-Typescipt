import React from 'react'
import Todo from './Todo'
import {useSelector} from 'react-redux'
import type { RootState } from './main'
import type { Item } from './features/todoSlice.ts'
const Todos:React.FC = () => {
    const todos=useSelector((state:RootState)=>state.todo.items)
  return (

<>
<ul>{ todos.length>0 && todos.map((todo:Item)=>(
    <li key={todo.id}>
        <Todo
         id={todo.id}  
        complete={todo.complete} 
        text={todo.text} /> </li>
))}</ul>
</>)
}

export default Todos