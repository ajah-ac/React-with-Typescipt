import React,{createContext,useState,useContext} from 'react'
type User={
  email:string,
  password:string
}
type loginType={
  user:User | null;
  login:(user:User)=>void;
  logout:()=>void
}
const LoginContext=createContext<loginType | undefined>(undefined);

type Props={
  children:React.ReactNode
}
function LoginProvider({children}:Props){
  const [user,setUser]=useState<User | null>(null)
  const login=(newUser:User)=>{
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser))}
    const logout=()=>{
      setUser(null)
      localStorage.removeItem('user')
    }
  
  return (
 <> <LoginContext.Provider value={{user,login,logout}}>
  {children}
  </LoginContext.Provider></>
  )
}

export default LoginProvider
export function useLoginContext(){
  const context=useContext(LoginContext)
  if(!context){
    throw new Error('useLogn must be used')
  }
  return context
}
