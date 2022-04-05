import React, { useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';
import axios from 'axios'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { urLDepartments, urlUsers } from '../../ApiRoutes';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';
import { Home } from '../../Page/Home/Home';
import { browserPopupRedirectResolver } from 'firebase/auth';



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
        axios.get(urlUsers, {params:{email:email, contraseña:password}})
        .then(response=>{
            console.log(response.data)
            if(response.data.length === 0){
                console.log("usuario no existente")
            }else{
                localStorage.setItem('UserName', response.data[0].nombre)
                localStorage.setItem('UserLastName', response.data[0].apellidos)
                localStorage.setItem('PhoneNumber', response.data[0].telefono)
                localStorage.setItem('UserEmail', response.data[0].email)
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
                    <FacebookAuth buttonText={"ingresar por facebook"}/>
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
                <NavLink to='/forgotPassword'><p>Olvidaste tu contraseña</p></NavLink>    
                </div>
            </div>
        </div>
    )  
}
