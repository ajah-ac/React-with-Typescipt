import { Library } from 'lucide-react'
import React,{useState, useEffect} from 'react'

const Fetch = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [response,setResponse]=useState(null)
    useEffect(()=>{
        setIsLoading(true)
            async function fetchdata() {
                try {
                    const resp=await fetch(' https://jsonplaceholder.typicode.com/posts')
                    const data=await resp.json()
                    setResponse(data)
                    setIsLoading(false)
                } catch (error) {
                    throw Error(error)
                    
                }
                
            
        }
        fetchdata()
    },[])
  return (
    <div>
        {isLoading && <p>Loading...</p>}
{response!==null && <ul>
{response.map((post)=><li key={post.id}>{post.title}</li>)}
</ul>}
    </div>
  )
}

export default Fetch