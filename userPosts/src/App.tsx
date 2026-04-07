import useUsers from './useUsers'
import type {Users} from './useUsers'
import './App.css'

function App() {
  const {status,data,error} = useUsers()

  return (
    <>
           {status === 'loading' && <p> Loading</p>}
            {status === 'error' && <p> {error}</p>}
            {status==='success' && <ul>
{ data.map((user:Users)=><li key={user.id}><h3>{user.name}</h3>
<p>{user.email}</p>
</li>)}
            </ul>}
    </>
  )
}

export default App
