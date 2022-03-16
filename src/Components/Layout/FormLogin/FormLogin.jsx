import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { urlUsers } from '../../ApiRoutes';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { getUser } from '../../../methodsAxios';
import { localStorage } from '../../../localStorage';

export const FormLogin = () => {

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
        getUser(email,password)
        .then(response=>{
            localStorage(response)
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
                    <FacebookAuth />
                <br></br><br></br>
                    < GoogleAuth />
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
