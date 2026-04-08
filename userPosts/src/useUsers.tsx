import { useEffect, useState } from 'react'
type fetchStatus = 'loading' | 'success' | 'error'
 export interface Users {
    id: number,
    name: string,
    email: string
}
const useUsers = () => {
    const [status, setStatus] = useState<fetchStatus>('loading')
    const [data, setData] = useState<[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchdatas = async () => {
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await resp.json()
                setData(data)
                setStatus('success')

            }catch (error) {
  if (error instanceof Error) {
    setError(error.message)
  } else {
    setError("Something went wrong")
  }
  setStatus("error")
}
        }

        fetchdatas()
    }, [])



    return {
        data,
        status,
        error
    }
}

export default useUsers