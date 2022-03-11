import React from 'react'
import { ActionUI } from '../../UI/ActionUI/ActionUI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


export const FormLogin = () => {
  return (
    <div className='form-container'>
        < ActionUI />
        <div className='form-content'>
            <button><FontAwesomeIcon icon={ faFacebook }></FontAwesomeIcon>continuar con facebook</button>
            <button><FontAwesomeIcon icon={ faGoogle }></FontAwesomeIcon>continuar con Google</button>
            <div className='separator'>
                <div className='line'/>
                <p>OR</p>
                <div className='line'/>
            </div>
            <form className='info-content'>
                <label>Email</label>
                <input type="text" maxLength="100" required ></input>
                <label>Contraseña</label>                    <input type="password" minLength="8" required></input>
            </form>
            <div className='rembermer'>
                <input type="checkbox"></input>
                <label>recuerdame</label>  
            </div>
            <div className="forgotPassword">
                <NavLink to="/forgotPassword"><p>olvidaste tu contraseña</p></NavLink>
                <button>ingresar</button>
            </div>
        </div>
    </div>
  )
}
