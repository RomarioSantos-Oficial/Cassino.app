import Logo from "../../assets/icons/logo.png"
import styles from "./Header.module.css"
import { IoGiftOutline, IoSearchSharp } from "react-icons/io5";
import { GoGear } from "react-icons/go";


function Header (){
    return(
        <>
            <header className={styles.header}>
                <img  className={styles.logo}  src={Logo} alt="Logo do cassino sorte em peder" />
                <nav className={styles.home}>
                    <a alt="">APOSTAS ESPORTIVAS</a>
                    <a alt="">CASSINO</a>
                    <a alt="">FANTASY</a>
                    <a alt="">VIRTUAIS</a>
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