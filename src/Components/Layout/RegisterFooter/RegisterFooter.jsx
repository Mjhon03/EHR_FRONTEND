import React from 'react'
import './RegisterFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


export const RegisterFooter = () => {
  return (
    <div className='register-footer-container'>
        <NavLink to="/"><p className='footer-title'>Easy House Rent</p></NavLink>
        <div className="footer-icons">
          <a href='#' target='_blank' ><FontAwesomeIcon className="footer-icon" icon={faTwitter}/></a>
          <a href='#' target='_blank' ><FontAwesomeIcon className="footer-icon" icon={faFacebook}/></a>
          <a href='https://wa.link/l1zwok' target='_blank'><FontAwesomeIcon className="footer-icon" icon={faWhatsapp}/></a>
          <a href='https://github.com/sebasruiz09' target='_blank'><FontAwesomeIcon target='_blank' className='footer-icon' icon={faGithub}/></a>
          <a href=''><FontAwesomeIcon className='footer-icon' icon={faInstagram}/></a>     
        </div>
        <div className="footer-relinks">
            <NavLink to="/aboutUs" className="footer-textInfo"><p>POLÍTICA DE PRIVACIDAD</p></NavLink>
            <NavLink to="/aboutUs" className="footer-textInfo"><p>SOBRE NOSOTROS</p></NavLink>
            <a href='https://docs.google.com/document/d/1DrMiacSmUaDV-KP539nJ3Ih5Rh1ChZUK/edit?usp=sharing&ouid=115216110876459361859&rtpof=true&sd=true' target='_blank' className='footer-textInfo'><p>MANUAL</p></a>
            <a href='#' className='footer-textInfo'><p>CONTÁCTENOS</p></a>
        </div>
    </div>
  )
}
