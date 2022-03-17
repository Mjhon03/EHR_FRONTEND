import React from 'react'
import './FormSingUp.css'
import { RegisterCover } from '../../UI/RegisterCover/RegisterCover'
import { GoogleAuth } from '../../UI/GoogleAuth/GoogleAuth';
import { FacebookAuth } from '../../UI/FacebookAuth/FacebookAuth';


export const FormSingUp = () => {
    return (
        <div className="register-form">
            < RegisterCover />
            <div className="form-register-text">
                <form>
                    <FacebookAuth />
                <br></br><br></br>
                    < GoogleAuth />
                    <div className="separator">
                        <div className="line"></div>
                        <p className='or'>OR</p>
                        <div className="line"></div>
                    </div>
                    <div className="info-register">
                    <label>Nombre</label>
                    <br></br>
                    <input type="text" maxLength="80" required className='info-input-register'></input>
                    <br></br>
                    <label>Apellidos</label>
                    <br></br>
                    <input type="text" maxLength='80' required className='info-input-register'></input>
                    <label>edad</label>
                    <br></br>
                    <input type="number" max="800" required className='info-input-register'></input>
                    <br></br>
                    <label>telefono</label>
                    <br></br>
                    <input type="text" maxLength="10" placeholder='opcional' required className='info-input-register'></input>
                    <label>Email</label>
                    <br></br>
                    <input type="email" maxLength="80" required className='info-input-register'></input>
                    <br></br>
                    <label>contraseña</label>
                    <br></br>
                    <input type="password" minLength='8' required className='info-input-register'></input>
                    </div>                   
                </form>
                
                <button className="register-submit">registrarme</button>            
            </div>
        </div>
    )  
}
