import { useState } from 'react'

import styles from './Form.module.css'

export default function SignUpForm(){

    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password_1, setPassword_1] = useState()
    const [password_2, setPassword_2] = useState()
    const [alert, setAlert] = useState()

    function submit(e) {
        e.preventDefault()
        email && username ?
            password_1 && password_2 ? 
                password_1 !== password_2 ? setAlert('Senhas não coincidem!') :
                console.log(`email: ${email} username: ${username} password: ${password_1}`) :
            setAlert('Preencha os campos de senha!'):
        setAlert('Preencha todos os campos!')
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <input 
            type='email'
            placeholder='digite seu e-mail'
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type='text' 
            placeholder='nome de usuário'
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type='password' 
            placeholder='crie uma senha!'
            onChange={(e) => setPassword_1(e.target.value)}
            />
            <input 
            type='password' 
            placeholder='repita sua senha!'
            onChange={(e) => setPassword_2(e.target.value)}
            />
            <p>{alert}</p>
            <button onClick={(e) => setAlert()} type="submit">Registrar !</button>
        </form>
    )
}