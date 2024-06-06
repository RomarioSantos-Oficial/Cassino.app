import styles from './Footer.module.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.link2}>
                    <h2>Links úteis</h2>
                    <a href="">Central de Ajudas</a>
                    <a href="">Regras de Apostas</a>
                    <a href="">Termos e Condições</a>
                    <a href="">Políticas de Jogos</a>
                    <a href="">Segurança</a>
                    <a href="">Meios de pagamento</a>
                    <a href="">Políticas de Privacidade</a>
                    <a href="">Redes sociais</a>
                </div>
                <div className={styles.aboutUs}>
                    <h2>Sobre nós</h2>
                    <p>Bem-vindo ao Sorte em Perder, o seu destino online definitivo para apostas e jogos de cassino! No nosso site, oferecemos uma experiência emocionante e segura para todos os entusiastas de apostas. Com uma vasta seleção de jogos de cassino, desde clássicos como blackjack e roleta até as mais recentes máquinas caça-níqueis, garantimos diversão para todos os gostos. Nossa plataforma é fácil de usar e está disponível 24 horas por dia, permitindo que você jogue quando e onde quiser. Além disso, oferecemos promoções generosas e bônus exclusivos para nossos jogadores. No Sorte em Perder, acreditamos que a sorte está sempre ao seu lado!</p>
                </div>
            </div>
            <div className={styles.socias}>
                <div className={styles.icons1}>
                    <IoLogoFacebook className={styles.icon2} />
                    <IoLogoInstagram className={styles.icon2}/>
                    <IoLogoTwitter className={styles.icon2}/>
                    <IoLogoYoutube className={styles.icon2}/>
                    <IoLogoLinkedin className={styles.icon2}/>
                    <IoLogoGithub className={styles.icon2}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
