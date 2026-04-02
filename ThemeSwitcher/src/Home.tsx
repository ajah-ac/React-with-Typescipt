import React  from 'react'
import { useThemeContext } from './ThemeProvider'
const Home = () => {
    const {theme}=useThemeContext()
  return (
    <div className={theme}>This is the home section</div>
  )
}

export default Home