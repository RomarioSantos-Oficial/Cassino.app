// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/icons/logo.png";
import styles from "./Header.module.css";
import { IoGiftOutline, IoSearchSharp } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";

function Header() {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const searchRef = useRef(null);

  const handleSearch = (query) => {
    console.log("Buscando por:", query);
  };

  useEffect(() => {
    // Adiciona um evento de clique ao elemento body
    document.body.addEventListener("click", handleOutsideClick);

    // Remove o evento de clique quando o componente é desmontado
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Função para lidar com cliques fora do formulário de busca
  const handleOutsideClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearchForm(false);
    }
  };

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
          <div className={styles.searchBox} ref={searchRef}>
            <IoSearchSharp className={styles.icon} onClick={() => setShowSearchForm(!showSearchForm)} />
            {showSearchForm && <SearchForm onSearch={handleSearch} />}
          </div>
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
