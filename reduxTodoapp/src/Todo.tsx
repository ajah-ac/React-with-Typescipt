import React,{useState} from 'react'
import {useSelector} from 'react-redux'
export interface TodoProps{
    id:string,
    text:string,
    complete:boolean
}
const Todo:React.FC<TodoProps>=({id,complete,text}) => {
    const [checked,setChecked]=useState(complete)
  return (
<>
<input type="checkbox" 
checked={checked} onChange={()=>{}} />
<span>{text}</span>

</>  )
}

export default Todo