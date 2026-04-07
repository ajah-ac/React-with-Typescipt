import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
   const [pass, setPassWord] = useState('')
   const [showPass,setShowPass]=useState(false)

   function handleSubmit(e:React.SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    if(pass.length<6){
      alert('Password must be more than 6 characters')
    }

    
   }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
      onChange={(e)=>setEmail(e.target.value)}
       name="" id="" 
       placeholder='Enter Email' />
    <input type= {showPass?"text":'password'}
     name="" id="" 
           onChange={(e)=>setPassWord(e.target.value)}
      placeholder='Enter Passaword'/>
<button onClick={()=>{setShowPass(prev=>!prev)}}> {showPass?'Hide':'Show'}
  </button>    </form>
      
    </>
  )
}

export default App
