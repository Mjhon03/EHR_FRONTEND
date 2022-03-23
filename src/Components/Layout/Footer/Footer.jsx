import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram , faGoogleDrive , faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import drive from '../../../icons/google-drive.png'
import facebook from '../../../icons/facebook.png'
import instagram from '../../../icons/instagram.png'
import whatsapp from '../../../icons/whatsapp.png'


export const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-links">
            <p className='redirect'>Documento de uso</p>
            <p className='redirect'>Terminos y condiciones</p>
            <p className='redirect'>Sobre nosotros</p>
            <p className='redirect'>Contacto</p>
        </div>
        <div className="icon-links">
            <img src={facebook} className="icon-link" alt="facebook" />
            <img src={instagram} className="icon-link" alt="instagram" />
            <img src={whatsapp} className="icon-link" alt="whatsapp" />
            <img src={drive} className="icon-link" alt="drive"/>
        </div>
            <div className="footer-info">
            <p className='footer-text'>Armenia - Quindio - Colombia</p>
            <p className='footer-text'>+57 317 458 3592</p>
            <p className='footer-text'>easyhouserent02@gmail.com</p>
        </div>
        <div className="line-footer" />
        <p className='copyright'>Copyright &copy; 2022 Easy House Rent - todos los derechos reservados</p>
    </div>
  )
}
