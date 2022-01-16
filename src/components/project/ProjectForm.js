import Input from "../form/Input"
import styles from './ProjectForm.module.css'

export default function ProjectForm(){
    return(
        <form className={styles.form}>
            <Input text='Username' type='text'></Input>
            <Input text='Password'type='password'></Input>
        </form>
    )
}