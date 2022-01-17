import SignInForm from "../forms/SignInForm"
import styles from './SignIn.module.css'

export default function SignIn() {
    return(
        <div className={styles.signin_container}>
            <h1>Faça login!</h1>
            <SignInForm></SignInForm>
        </div>
    )
}