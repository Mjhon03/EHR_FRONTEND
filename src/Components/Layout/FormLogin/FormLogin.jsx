import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { urlLogin } from '../../ApiRoutes';
import { useNavigate } from 'react-router-dom'


export const FormLogin = () => {

    //Login logic

    const navigate = useNavigate()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const setEventToEmail = ((event) => {
        setemail(event.target.value)
    })

    const SetEventToPassword = ((event) => {
        setpassword(event.target.value)
    })

    const login = ((e) => {
        e.preventDefault()
        axios.post(urlLogin, {
            "email" : email,
            "password" : password
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem("userInfo", JSON.stringify(response.data))
                navigate('/')
            })
            .catch(ex => {
                console.log(ex);
            })
    })

    const enterLogin=(event)=>{
        let charCode = event.keyCode;
        if (charCode===13){
            login()
        }
    }


    return (
        <div className="login-form">
            <form className="login-valid-info">
                <div className="auth-services">
                    <GoogleAuth buttonText={"Iniciar sesion con Google"} /><br></br><br></br>
                    <FacebookAuth buttonText={"Ingresar por facebook"} />
                </div>
                <div className="separator-container">
                    <div className="line-separator" />
                    <p className='separator-info'>OR</p>
                    <div className="line-separator" />
                </div>
                <div className="info">
                    <input type="email" max="80" required className='info-input-register' placeholder="Correo electronico" onChange={setEventToEmail}></input><br></br>
                    <input type="password" minLength='8' required className='info-input-register' placeholder="Contraseña" onChange={SetEventToPassword} onKeyUp={e=>(enterLogin(e))} ></input>
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
