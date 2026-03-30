import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Hello')
type Props={
  name:string;
}
function greetings({name}:Props){
  return <h1>Hello {name}</h1>

}

  return (
    <>
    <input type="text" onChange={(e)=>setName(e.target.value)} />
     {greetings({name})}
    </>
  )
}

export default App
