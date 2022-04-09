import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';

export const FormLogin = () => {

    //Login logic

    const [email, setemail] = useState({ email: "email" })
    const [password, setpassword] = useState({ password: "password" })

    const setEventToEmail = ((event) => {
        setemail(event.target.value)
    })

    const SetEventToPassword = ((event) => {
        setpassword(event.target.value)
    })

    const login = (() => {
        axios.get(urlUsers, { params: { email: email, contraseña: password } })
            .then(response => {
                console.log(response.data)
                if (response.data.length === 0) {
                    console.log("usuario no existente")
                } else {
                    localStorage.setItem('UserName', response.data[0].nombre)
                    localStorage.setItem('UserLastName', response.data[0].apellidos)
                    localStorage.setItem('PhoneNumber', response.data[0].telefono)
                    localStorage.setItem('UserEmail', response.data[0].email)
                }
            })
            .catch(ex => {
                console.log(ex);
            })
    })

    return (
        <div className="login-form">
            <form className="login-valid-info">
                <div className="auth-services">
                    <FacebookAuth buttonText={"ingresar por facebook"} /><br></br><br></br>
                    < GoogleAuth buttonText={"iniciar sesion con Google"} />
                </div>
                <div className="separator-container">
                        <div className="line-separator"/>
                        <p className='separator-info'>OR</p>
                        <div className="line-separator"/>
                    </div>
                <div className="info">
                    <input type="email" max="80" required className='info-input-register' placeholder="Correo electronico" onChange={setEventToEmail}></input><br></br>
                    <input type="password" minLength='8' required className='info-input-register' placeholder="Contraseña" onChange={SetEventToPassword}></input>
                </div>
                <div className="remember-password">
                    <input className='remember-check' type='checkbox'></input>
                    <p>recuerdame</p>
                </div>
                <div className="forgot-password">
                    <button className="register-submit" type='submit' onClick={login}>entrar</button>
                    <NavLink to='/forgotPassword'><p className='login-forgot-password'>Olvidaste tu contraseña</p></NavLink>
                </div>
                <div className="create-account-login">
                    <p>no tienes cuenta.. </p>
                    <NavLink to="/register"><p className='create-account-link'>crea una</p></NavLink>
                </div>
            </form>
        </div>
    )
}
