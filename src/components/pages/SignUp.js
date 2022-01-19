import styles from './SignUp.module.css'
import { useState } from 'react'
import api from "../services/api"
import { useNavigate } from 'react-router-dom'



export default function SignUp(){
    const navigate = useNavigate()
    
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password_1, setPassword_1] = useState()
    const [password_2, setPassword_2] = useState()
    const [alert, setAlert] = useState()

    async function submit(e) {
        e.preventDefault()

        if (!email || !username || !password_1 || !password_2) {
            setAlert('Preencha todos os campos!')
        }

        if (password_1 !== password_2) {
            setAlert('Senhas não coincidem!')
        }
        else {

            const response = await api.post('/auth/register', {
                name: username,
                email: email,
                password: password_1
            })
            .then((response) => { navigate("/login")})
            .catch((error) => {
                const {msg} = error.response.data
                setAlert(msg);
                console.log(error.response.status);
                console.log(error.response.headers);
            })

            
        }


    }



    return(
        <div className={styles.signup_container}>
            <h1>Registre-se!</h1>
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
        </div>
    )
}