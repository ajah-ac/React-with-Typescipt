import { useState } from 'react'
import './output.css'
import AddTodo from './components/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='bg-green-100'> hello</div>
    <AddTodo/>
    </>
  )
}

export default App
