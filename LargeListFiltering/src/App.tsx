import { useState,useMemo,useCallback } from 'react'

import './App.css'
import ItemsList  from './Items'
function App() {
  const [input, setInput] = useState('')
const Change=useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{setInput(e.target.value)},[])

const filter=useMemo(()=>ItemsList.filter(item=>item.name===input),[input])
 if(filter.length<0 && input!==''){
  alert('Item not found')
 }
return (
    <>
      <input type="text"
       onChange={Change}
      placeholder='Search for an item...' />
      <button >Search</button>
      {<ul>{filter.map((item)=><li key={item.id}>
        <h1> Item:{item.name}</h1>
      </li>)}
        </ul>}
    </>
  )
}

export default App
