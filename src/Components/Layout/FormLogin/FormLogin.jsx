import React from 'react'
import { ActionUI } from '../../UI/ActionUI/ActionUI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import './FormLogin.css'
import { LoginCover } from '../../UI/LoginCover/LoginCover';


export const FormLogin = () => {
    const URL = 'https://i.ibb.co/BqDQzp6/background.jpg'
  return (
      <div className="login-form">
          < LoginCover />
          <div className="form-text">
              <form>
                  <button className='link-icon'><FontAwesomeIcon className='fa-icon' icon={ faFacebook }></FontAwesomeIcon>  Continuar con facebook</button><br></br>
                  <button className='link-icon'><FontAwesomeIcon className='go-icon' icon={ faGoogle }></FontAwesomeIcon>   Continuar con Google</button>
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
                  <input type='checkbox'></input>
                  <label>recuerdame</label>
              </div>
              <div className="forgot-password">
                  <NavLink to='/forgotPassword'><p>olvidaste tu contraseña</p></NavLink>
                  <button type='submit'>entrar</button>
              </div>
          </div>
      </div>
  )
}
