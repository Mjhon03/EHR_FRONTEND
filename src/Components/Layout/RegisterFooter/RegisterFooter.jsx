import React from 'react'
import './RegisterFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebook , faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


export const RegisterFooter = () => {
  return (
    <div className='register-footer-container'>
        <NavLink to="/"><p className='footer-title'>Easy House Rent</p></NavLink>
        <div className="footer-icons">
            <FontAwesomeIcon className="footer-icon" icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className="footer-icon" icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className="footer-icon" icon={faWhatsapp}></FontAwesomeIcon>
        </div>
        <div className="footer-relinks">
            <NavLink to="/aboutUs" className="footer-textInfo"><p>PRIVACY POLICY</p></NavLink>
            <NavLink to="/aboutUs" className="footer-textInfo"><p>ABOUT US</p></NavLink>
        </div>
    </div>
  )
}
