
import './App.css'
import LogForm from './LogForm.tsx'
import LoginProvider from './LoginProvider'
import { Route,Routes } from 'react-router'
import Home from './Home.tsx'
function App() {

  return (
    <>
    hello
    <LoginProvider>
      <Routes>
<Route path='/login' element={<LogForm/>}/>
<Route path='/home' element={<Home/>}/>
    
    
      </Routes>
</LoginProvider>
    </>
  )
}

export default App
