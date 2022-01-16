import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy_right}><span>hidekimsk</span> &copy;</p>
        </footer>
    )
}