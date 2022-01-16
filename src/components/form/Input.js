import styles from './Input.module.css'

export default function Input({type, text}){
    return(
        <div className={styles.form_control}>
            <label>{text}</label>
            <input type={type}></input>
        </div>
    )
}