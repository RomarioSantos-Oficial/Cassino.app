import React from 'react';
import { Link } from "react-router-dom";
import styles from './LoginForm.module.css';
import Logo from "../../../assets/images/transparent.png";
import { SiGmail, SiFacebook, SiLinkedin } from "react-icons/si";
import { FaYahoo } from "react-icons/fa";

function LoginForm() {
    return (
        <div className={styles.loginform}>
            <div className={styles.loginhearde}>
                <Link to="/">
                    <img src={Logo} className={styles.logo10} alt="Logo do cassino sorte em perder" />
                </Link>

                <h1>LOGIN</h1>

                <input type="text" placeholder='Your ID' className={styles.login_ip} id='loginNameInput' name='loginName' />
                <input type="password" placeholder='Password' className={styles.login_ip} id='loginPasswordInput' name='loginPassword' />
                <Link id="signupLink" to="/registar" className={styles.formR}>Cadastra-se</Link>
            </div>
            <button type='button' className='login__button'>Login</button>

            <div className={styles.inconsfrom}>
                <a href="https://accounts.google.com/SignUp" className={styles.inconfrom} target="_blank" rel="noopener noreferrer">
                    <SiGmail />
                </a>
                <a href="https://www.facebook.com/r.php" className={styles.inconfrom} target="_blank" rel="noopener noreferrer">
                    <SiFacebook />
                </a>
                <a href="https://login.yahoo.com/account/create" className={styles.inconfrom} target="_blank" rel="noopener noreferrer">
                    <FaYahoo />
                </a>
                <a href="https://www.linkedin.com/signup" className={styles.inconfrom} target="_blank" rel="noopener noreferrer">
                    <SiLinkedin />
                </a>
            </div>
        </div>
    );
}

export default LoginForm;
