import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.copy_right}><span>app-invest</span> &copy; 2021</p>
        </footer>
    )
}