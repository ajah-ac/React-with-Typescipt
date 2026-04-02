import { useState } from 'react'
import './App.css'
import ThemeProvider from './ThemeProvider'
import Home from './Home'
function App() {

  return (
    <>
    <ThemeProvider>
<Home/>
    </ThemeProvider>
     
    </>
  )
}

export default App
