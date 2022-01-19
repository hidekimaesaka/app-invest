import styles from './SignIn.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../services/api"

export default function SignIn() {
    const navigate = useNavigate()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [alert, setAlert] = useState()

    async function submit(e) {
        e.preventDefault()

        if(!email || !password){
            setAlert("Preencha todos os campos!")
        }
        else{

            const response = await api.post('/auth/login', {
                email: email,
                password: password
            })
            .then((response) => { navigate("/user")})
            .catch((error) => {
                const {msg} = error.response.data
                setAlert(msg);
                console.log(error.response.status);
                console.log(error.response.headers);
            })

            
        }

    }

    return(
        <div className={styles.signin_container}>
            <h1>Faça login!</h1>
            <form onSubmit={submit} className={styles.form}>
            <input
                type='text'
                placeholder='Digite seu email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Digite sua senha'
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>{alert}</p>
            <button onClick={(e) => setAlert()} type="submit">Log In</button>
        </form>
        </div>
    )
}