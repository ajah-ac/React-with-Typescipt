import React,{createContext,useContext,useState} from 'react'
type Theme={
    theme:string,
    toggleTheme:()=>void
}
const ThemeContext=createContext<Theme | null>(null)

type Props={
    children:React.ReactNode
}
function ThemeProvider({children}:Props){
    const [theme,setTheme]=useState('light')
function toggleTheme(){
    setTheme(prev=>prev==='light'?'dark':'light')

}
  return (
    < ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export function useThemeContext(){
    const context=useContext(ThemeContext)
    if(!context){
        throw new Error ('Must provide a context')
         return 
    }
    return context
}