import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';
import Logo from "../../../assets/images/transparent.png";
function RegistrationForm() {
    const showLoginForm = () => {
        // Define the function to show login form
    };

    const cadastrar = () => {
        // Define the function to handle form submission
    };

    return (
        <div className={styles.register}>
            <form action="login-form">
                <div className={styles.forms}>
                    <h1>Register</h1>
                    <img className={styles.logo20} src={Logo} alt="logo do site" />

                    <fieldset className={styles.forms2}>
                        <legend>Your Information</legend>
                        <input type="email" placeholder="Your email" id="email" name="email" />
                        <input type="text" placeholder="Your ID" id="userID" name="userID" />
                        <input type="date" placeholder="Date of birth" id="birthdateInput" name="birthdate" />
                        <input type="text" placeholder="Your address" id="streetName" name="streetName" />
                        <input type="text" placeholder="City" id="city" name="city" />
                        <input type="text" placeholder="State/Province" id="state" name="state" />
                        <input type="text" placeholder="Country" id="country" name="country" />
                        <input type="text" placeholder="NIF or CPF" id="document1" name="document1" />
                        <legend>Password</legend>
                        <input type="password" placeholder="Choose a password" id="password1" name="password1" />
                        <input type="password" placeholder="Enter the password again" id="password2" name="password2" />
                    </fieldset>
                    <label htmlFor="signupLong">Already have an account?</label><br />
                    <a id="signupLink" onClick={showLoginForm} style={{ cursor: 'pointer' }}>Login</a><br />
                </div>
                <button type="button" className={styles.login__button} onClick={cadastrar}>Cadastrar</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
