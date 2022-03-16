
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';
import axios from 'axios'

import { signInWithPopup , FacebookAuthProvider} from 'firebase/auth'
import { auth} from '../../../firebase-config';

const baseurl = "https://localhost:44352/api/Users"

export const FormLogin = () => {

    //facebook auth 
    const signInWithFcebook = () =>{
        const provider = new FacebookAuthProvider();
        signInWithPopup( auth,provider)
        .then((res)=>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }

    const responseGoogle=(response)=>{
        console.log(response)
    }
//Login logic 
    const[email, setemail] = useState({email: "email"})
    const[password, setpassword] = useState({password: "password"})

    const setEventToEmail=((event)=>{
        setemail(event.target.value)
    }) 

    const SetEventToPassword=((event)=>{
        setpassword(event.target.value)
    })

    const login=(()=>{
        axios.get(baseurl, {params:{email:email, contraseña:password}})
        .then(response=>{
            console.log(response.data);
            return response.data;
        })
        .then(response=>{
            if (response.length>0) {
                let datos = response[0];
                localStorage.setItem('id', datos.id)
                localStorage.setItem('Nombre', datos.nombre)
                localStorage.setItem('Apellidos', datos.apellidos)
                localStorage.setItem('email', datos.email)
                localStorage.setItem('telefono', datos.telefono)
                alert(`Bienvenido ${datos.nombre} ${datos.apellidos}`)
            }else{
                
            }
        })
        .catch(ex=>{
            console.log(ex);
        })
    })

    return (
        <div className="login-form">
            < LoginCover />
            <div className="form-text">
                <form>
                    <button onClick={ signInWithFcebook }>ingresar con facebook</button>
                <br></br><br></br>
                < GoogleLogin 
                    clientId = "502993702484-vkdcg537aa1ip1r14mab9s11dt7lf2i2.apps.googleusercontent.com" 
                    buttonText = "Iniciar sesión con Google" 
                    onSuccess = { responseGoogle } 
                    onFailure = { responseGoogle } 
                    cookiePolicy = { 'single_host_origin' }
                / >
                    <div className="separator">
                        <div className="line"></div>
                        <p className='or'>OR</p>
                        <div className="line"></div>
                    </div>
                    <div className="info">
                    <label>Email</label>
                    <br></br>
                    <input type="email" max="80" required className='info-input' onChange={setEventToEmail}></input>
                    <br></br>
                    <label>contraseña</label>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input' onChange={SetEventToPassword}></input>
                    </div>
                </form>
                <div className="remember-password">
                    <input className='remember-check' type='checkbox'></input>
                    <label>recuerdame</label>
                </div>
                <div className="forgot-password">
                <button className="login-submit" type='submit' onClick={login}>entrar</button>
                <NavLink to='/forgotPassword'><p>olvidaste tu contraseña</p></NavLink>    
                </div>
            </div>
        </div>
    )  
}
