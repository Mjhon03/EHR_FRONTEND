import './PasswordReset.css'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

export const PasswordResetForm = () => {

    let location = useLocation()
    console.log(location);

    return (
        <div className='div-passwordReset'>
            <div className='div-infoReset'>

                <div className="reset-logoContainer">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>

                <div className='div-titleReset'>
                    <h2>Reestablecer Contraseña</h2>
                    <p>Escribe tu nueva contraseña y repitela</p>
                </div>

                <div className='div-formReset'>
                    <form className='formResetPassword'>
                        <p>Nueva contraseña</p>
                        <input type="text" placeholder='********'/>

                        <p>Repite tu contraseña</p>
                        <input type="text" placeholder='********'/><br/>

                        <NavLink to='/'><b><button>Guardar</button></b></NavLink> 
                    </form>
                </div>

            </div>
        </div>
    )
}