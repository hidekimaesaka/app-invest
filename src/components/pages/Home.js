import savings from '../../img/savings.png'
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

export default function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>app-invest</span></h1>
            <p>Comece a gerenciar os seus investimentos agora mesmo!</p>
            <img src={savings} alt='savings img'></img>
            <LinkButton to="/signup" text="Quero começar!"></LinkButton>
        </section>
    )
}