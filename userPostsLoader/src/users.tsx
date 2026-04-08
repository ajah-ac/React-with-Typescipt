import { useLoaderData } from 'react-router-dom'
interface User{
    id:number,
    name:string
}
const Users = () => {
    const users:User[]=useLoaderData()
    if(!users){
        return 'No users found'
    }
  return (
    <select name='users'>
        <option value='' selected disabled >Choose a user </option>
{users.map(user=><option key={user.id}
value={user.id}
> {user.name}</option>)}
    </select>
  )
}
export default Users