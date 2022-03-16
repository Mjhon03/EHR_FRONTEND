
import { GoogleLogin } from 'react-google-login';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';
import axios from 'axios'
import { signInWithPopup , FacebookAuthProvider} from 'firebase/auth'
import { auth} from '../../../firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const URL = "https://localhost:44352/api/users"


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

    //registro auth google and facebook logic

    const[nombre, setNombre] = useState("")
    const[apellidos,setApellidos] = useState("")
    const[image,setImage] = useState("")
    const[correo,setCorreo] = useState("")
    const[contraseña,setContraseña] = useState("")

    const responseGoogle=(respuesta)=>{
        setemail(respuesta.profileObj.email)
        setpassword(respuesta.profileObj.googleId)
        axios.get(URL, {params:{email:email, contraseña:password}})
        .then(response=>{
            // return response.data;
            if(email != response.data.email || password != response.data.contraseña){
                setCorreo(respuesta.profileObj.email)
                setContraseña(respuesta.profileObj.googleId)
                setNombre(respuesta.profileObj.givenName)
                setApellidos(respuesta.profileObj.familyName)
                axios.post(URL,{
                    "nombre":nombre,
                    "apellidos":apellidos,
                    "email":correo,
                    "contraseña":contraseña,
                    "estado":"A",
                    "departamento":25,
                    "municipio":14       
                })
                .then(res => res)
                .then(data =>{
                    console.log(data)
                })  
            }else{
                console.log("son iguales")
            }       
        })    
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
        axios.get(URL, {params:{email:email, contraseña:password}})
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
                window.Location = '/Home'
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
                    <button className="facebook-auth"  onClick={ signInWithFcebook }><FontAwesomeIcon className="facebook-icon" icon={ faFacebook }></FontAwesomeIcon>ingresar con Facebook</button>
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
