import React, { useEffect, useState } from 'react'
type fetchStatus = 'loading' | 'success' | 'error'
 export interface Users {
    id: number,
    name: string,
    email: string
}
const useUsers = () => {
    const [status, SetStatus] = useState<fetchStatus>('loading')
    const [data, setData] = useState<[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchdatas = async () => {
            try {
                const resp = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await resp.json()
                setData(data)
                SetStatus('success')

            } catch (error) {
                setError(error)
                SetStatus('error')
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