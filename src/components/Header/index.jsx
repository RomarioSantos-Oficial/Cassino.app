import React from 'react';
import Logo from "../../assets/icons/logo.png";
import styles from "./Header.module.css";
import { IoGiftOutline, IoSearchSharp } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src={Logo} alt="Logo do cassino sorte em perder" />
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
                    <IoSearchSharp className={styles.icon} />
                    <GoGear className={styles.icon} />
                </div>
                <div className={styles.buttonsHome}>
                    <Link to="/registar" className={styles.registar}>Registra-se</Link>
                    <Link to="/entrar" className={styles.entrar}>Entrar</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
