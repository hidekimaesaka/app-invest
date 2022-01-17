import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import Container from "./Container"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.login}>
                        <Link to="/login">Sign-In</Link>
                    </li>
                    <li className={styles.login}>
                        <Link to="/signup">Sign-Up</Link>
                    </li>
                </ul>
            </Container>
        </nav>

    )
}