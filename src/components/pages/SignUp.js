import SignUpForm from "../forms/SignUpForm"
import styles from './SignUp.module.css'

export default function SignUp(){
    return(
        <div className={styles.signup_container}>
            <h1>Registre-se!</h1>
            <SignUpForm></SignUpForm>
        </div>
    )
}