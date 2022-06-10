import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <div className='register-footer-container'>
        <NavLink to="/"><p className='footer-title'>Easy House Rent</p></NavLink>
        <div className="footer-icons">
          <a href='https://twitter.com/EasyHouseRent02' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faTwitter}/></a>
          <a href='https://www.facebook.com/Easy-House-Rent-104807078925662' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faFacebook}/></a>
          <a href='https://wa.link/l1zwok' target='_blank' rel='noreferrer'><FontAwesomeIcon className="footer-icon" icon={faWhatsapp}/></a>
          <a href='https://github.com/sebasruiz09' target='_blank' rel='noreferrer'><FontAwesomeIcon  className='footer-icon' icon={faGithub}/></a>
          <a href='https://www.instagram.com/easyhouserent' target='_blank' rel='noreferrer'><FontAwesomeIcon className='footer-icon' icon={faInstagram}/></a>     
        </div>
        <div className="footer-relinks">
            <NavLink to="/privacy&polity" className="footer-textInfo"><p>POLÍTICA DE PRIVACIDAD</p></NavLink>
            <NavLink to="/aboutUs" className="footer-textInfo"><p>SOBRE NOSOTROS</p></NavLink>
            <NavLink to='/contact' className='footer-textInfo'><p>CONTÁCTENOS</p></NavLink>
            <a href='https://drive.google.com/drive/folders/1obo9D2blXSvf-dtLHS9bJo8NKRASVAKR?usp=sharing' target='_blank' rel='noreferrer' className='footer-textInfo'><p>DOCUMENTACIÓN</p></a>
        </div>
    </div>
  )
}
