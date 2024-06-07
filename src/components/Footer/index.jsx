import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.link2}>
                    <h2>Links úteis</h2>
                    <Link to="/ajudas">Central de Ajudas</Link >
                    <Link to="/regras">Regras de Apostas</Link >
                    <Link to="/termos">Termos e Condições</Link>
                    <Link to="/políticasdejogos">Políticas de Jogos</Link >
                    <Link to="/segurança">Segurança</Link >
                    <Link to="/meiosdepagamento">Meios de pagamento</Link >
                    <Link to="/políticasdePrivacidade">Políticas de Privacidade</Link >
                    <Link to="/redessociais">Redes sociais</Link >
                </div>
                <div className={styles.aboutUs}>
                    <h2>Sobre nós</h2>
                    <p>Bem-vindo ao Sorte em Perder, o seu destino online definitivo para apostas e jogos de cassino! No nosso site, oferecemos uma experiência emocionante e segura para todos os entusiastas de apostas. Com uma vasta seleção de jogos de cassino, desde clássicos como blackjack e roleta até as mais recentes máquinas caça-níqueis, garantimos diversão para todos os gostos. Nossa plataforma é fácil de usar e está disponível 24 horas por dia, permitindo que você jogue quando e onde quiser. Além disso, oferecemos promoções generosas e bônus exclusivos para nossos jogadores. No Sorte em Perder, acreditamos que a sorte está sempre ao seu lado!</p>
                </div>
            </div>
            <div className={styles.socias}>
                <div className={styles.icons1}>
                    <a href="mailto:romariodevs@gmail.com"><IoMailOutline className={styles.icon2} /></a>
                    <a href="https://www.facebook.com/profile.php?id=61559557505574" target="_blank" rel="noopener noreferrer"><IoLogoFacebook className={styles.icon2} /></a>
                    <a href="https://www.instagram.com/euoromario/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className={styles.icon2} /></a>
                    <a href="https://x.com/RomarioSant0s" target="_blank" rel="noopener noreferrer"> <IoLogoTwitter className={styles.icon2} /></a>
                    <a href="https://www.youtube.com/@romariosantos3835" target="_blank" rel="noopener noreferrer"> <IoLogoYoutube className={styles.icon2} /></a>
                    <a href="https://www.linkedin.com/in/euoromario/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={styles.icon2} /></a>
                    <a href="https://github.com/RomarioDevs" target="_blank" rel="noopener noreferrer"> <IoLogoGithub className={styles.icon2} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
