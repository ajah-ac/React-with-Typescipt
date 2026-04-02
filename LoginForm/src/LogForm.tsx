import React, { useState } from 'react'
import { useLoginContext } from './LoginProvider.tsx'
const LogForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, login } = useLoginContext()
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user) {
            console.log('already in')
            return;
        }
        login({ email, password });

    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="email"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                required />
            <input type="password"
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <button type='submit'>Login</button>

        </form>
    )
}

export default LogForm