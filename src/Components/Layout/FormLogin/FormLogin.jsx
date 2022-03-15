import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';


export const FormLogin = () => {

    const responseGoogle=(response)=>{
        console.log(response)
    }

    const responseFacebook = (response) => {
    console.log(response);
    }

  return (
      <div className="login-form">
          < LoginCover />
          <div className="form-text">
              <form>
              <FacebookLogin
                appId="1128110308019125"
                autoLoad={false}
                fields="name,email,picture,"   
                callback={responseFacebook}  
                textButton="Iniciar sesion con facebook" />
                
                
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
                    <input type="email" max="80" required className='info-input'></input>
                    <br></br>
                    <label>contraseña</label>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input'></input>
                    </div>
              </form>
              <div className="remember-password">
                  <input className='remember-check' type='checkbox'></input>
                  <label>recuerdame</label>
              </div>
              <div className="forgot-password">
                <button className="login-submit" type='submit'>entrar</button>
               <NavLink to='/forgotPassword'><p>olvidaste tu contraseña</p></NavLink>    
              </div>
          </div>
      </div>
  )
}
