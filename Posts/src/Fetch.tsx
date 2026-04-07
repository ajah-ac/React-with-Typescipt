import { Library } from 'lucide-react'
import React,{useState, useEffect} from 'react'

type Posts={
    userId:number,
        id:number,
    title:string,
    body:string
}
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
{response.map((post:Posts)=><li key={post.id}>
    <span>Post Number:{post.id}</span><h3>
   {post.title} </h3>
   <p>{post.body}</p></li>)}
</ul>}
    </div>
  )
}

export default Fetch