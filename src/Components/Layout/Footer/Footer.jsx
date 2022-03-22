
import './Footer.css'
import { NavLink } from 'react-router-dom';
export const Footer = ()=>{
    return(
        <>
        <footer className='footer'>
            <div className='footer-container'>

                <div>
                    <NavLink className="navlink" to="/TerminosCondiciones"><li className='links-footer'>Términos y condiciones</li></NavLink> 
                </div>

                <div>
                    <NavLink className="navlink" to="/PoliticasPrivacidad"><li className='links-footer'>Políticas de privacidad</li></NavLink> 
                </div>

                <div>
                     <p>Síguenos</p>
                </div>
            </div>
        <hr />
        <p>	&copy; 2022  Esy House Rent Todos los derechos reservados</p>
        </footer>
        </>
    )
}