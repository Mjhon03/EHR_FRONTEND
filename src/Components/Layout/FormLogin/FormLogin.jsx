import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { urlLogin } from '../../ApiRoutes';


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

    // const login = ((e)  => {
    //     e.preventDefault() 
    //     fetch(urlLogin, {
    //         method: 'POST',
    //         body: { 
    //             email: email,
    //             password: password
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    // })
    const login = ((e) => {
        e.preventDefault()
        axios.post(urlLogin, { params: { email: email, password: password } })
            .then(response => {
                console.log(response.data)
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
                    <div className="line-separator" />
                    <p className='separator-info'>OR</p>
                    <div className="line-separator" />
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
                    <button className="register-submit" onClick={(e) => login(e)} type='submit'>entrar</button>
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
