import './PasswordReset.css'
import { NavLink, useSearchParams } from 'react-router-dom';

export const PasswordResetForm = () => {

    const GetToken =  () => {
        const [searchParams] = useSearchParams();
        console.log(searchParams.get('token')); // 'name'
    }

    GetToken();

    return (
        <div className="body-container">
            <div className="forgot-password-container">
                <div className="logo-container">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>
                <h2 className='forgot-title'>Cambio de contraseña</h2>
                <form>
                    <input className='email-put' type="password" placeholder='Nueva contraseña' name="user_name"></input>
                    <div className="separator"></div>
                    <input className='email-put' type="password" placeholder='Confirmacion nueva contraseña' name="user_name"></input>                    
                    <button className='send-email'>Enviar</button>      
                </form>
            </div>
      </div>
    )
}