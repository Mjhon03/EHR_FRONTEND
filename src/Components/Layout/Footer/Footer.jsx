import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import logoapp2 from '../../../img/logoapp2.ico'
import './Footer.css'
import { NavLink } from 'react-router-dom';
export const Footer = ()=>{
    return(
        <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='div1'>
                    <img className='logo-app' src={logoapp2}    />
                    <p className='under-logo'>¿Necesitas ayuda?</p><NavLink className="navlink" to=""><p className='links-writeus'>Escríbenos</p></NavLink>
                </div>

                <div>
                    <NavLink className="navlink" to="/TerminosCondiciones"><li className='links-footer'>Términos y condiciones</li></NavLink> 
                </div>

                <div>
                    <NavLink className="navlink" to="/PoliticasPrivacidad"><li className='links-footer'>Políticas de privacidad</li></NavLink> 
                </div>

                <div>
                     <p className='followus'>Síguenos
                     <li className='icons '><FaFacebookF color='#FFFF'/></li> 
                     <li className='icons'><FaInstagram color='#FFFF'/></li>  
                     <li className='icons' ><FaTwitter color='#FFFF'/></li></p>
                </div>
            </div>
            <br/>
        <hr />
        <p className='last-line'>	&copy; 2022  Easy House Rent Todos los derechos reservados</p>
        </footer>
        </>
    )
}