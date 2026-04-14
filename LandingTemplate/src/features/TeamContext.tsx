import {createContext,useContext,useState} from 'react'
type Member={
    id:number,
    name:string,
    role:'manager' | 'designer' | 'developer'
}


const TeamContext=createContext<Member[] | null>(null)
const members:Member[]=[
    {
        id:1,
        name:'john',
        role:'developer'
    }, {
        id:2,
        name:'Sarah',
        role:'designer'
    }, {
        id:3,
        name:'Ilhan',
        role:'manager'
    }
]
function TeamContextProvider({children}:{children:React.ReactNode}) {
  return (
    <TeamContext.Provider value={members}>{children}</TeamContext.Provider>
  )
}

export default TeamContextProvider
export const useTeamContext=()=>{
    const context=useContext(TeamContext)
    if(!context){
        throw new Error('useTeamContext must be used indied TeamContextProvider')
    }
    return context
}