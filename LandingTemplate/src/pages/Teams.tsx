import { useSearchParams } from 'react-router'
import { useTeamContext } from '../features/TeamContext'

const Teams = () => {
    const members=useTeamContext()
    const [search,setSearch]=useSearchParams()
    const role=search.get('role')
    const filtered=role===null?members:members.filter(member=>member.role===role)
  return (
    <>
        <div  className='flex justify-between text-2xl px-4 pt-5 font-bold'>
        <button onClick={()=>setSearch('')}>All</button>
        <button onClick={()=>setSearch('role=manager')}>Manager</button>
        <button onClick={()=>setSearch('role=developer')}>Developer</button>
        <button onClick={()=>setSearch('role=designer')}>Designer</button>
        </div>
        <div  className='flex text-xl flex-col items-center  justify-between px-4 pt-5'>

{filtered.map(m=><div key={m.id} className='flex justify-between'> <h1>{m.name}</h1></div>)}
</div>

    </ >
  )
}

export default Teams