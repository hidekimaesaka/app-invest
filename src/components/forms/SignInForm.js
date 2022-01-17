import { useState } from 'react'

import styles from './Form.module.css'

export default function SignInForm() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function submit(e) {
        e.preventDefault()
        console.log(`username: ${username} password: ${password}`)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <input
                type='text'
                placeholder='nome de usuário'
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type='password'
                placeholder='digite sua senha!'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In!</button>
        </form>
    )
}