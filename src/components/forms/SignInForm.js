import { useState } from 'react'

import styles from './Form.module.css'

export default function SignInForm() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [alert, setAlert] = useState()

    function submit(e) {
        e.preventDefault()
        username && password ?
            console.log(`username: ${username} password: ${password}`) :
        setAlert('Preencha todos os campos!')
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
            <p>{alert}</p>
            <button onClick={(e) => setAlert()} type="submit">Log In!</button>
        </form>
    )
}