import Logo from "../../assets/icons/logo.png"
import styles from "./Header.module.css"
import { IoGiftOutline, IoSearchSharp } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";


function Header (){
    return(
        <>
            <header className={styles.header}>
                <Link to="/">
                     <img  className={styles.logo}  src={Logo} alt="Logo do cassino sorte em peder" />
                </Link>
               
                <nav className={styles.home}>
                    <Link to="/bets">APOSTAS ESPORTIVAS</Link>
                    <Link to="/cassino">CASSINO</Link>
                    <Link to="/fantasy">FANTASY</Link>
                    <Link to="/virtual">VIRTUAIS</Link>
                </nav>
                <div className={styles.buscar1}>
                    <div className={styles.icons}>
                    <IoGiftOutline className={styles.icon} />
                    <IoSearchSharp className={styles.icon}/>
                    <GoGear className={styles.icon}/>
                    </div>
                    <div className={styles.buttonsHome}>
                        <button className={styles.registar}>Registra-se</button>
                        <button className={styles.entrar}>Entrar</button>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header