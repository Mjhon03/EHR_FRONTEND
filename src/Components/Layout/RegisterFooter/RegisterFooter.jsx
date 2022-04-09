import React from 'react'
import './RegisterFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebook , faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export const RegisterFooter = () => {
  return (
    <div className='register-footer-container'>
        <p className='footer-title'>Easy House Rent</p>
        <div className="footer-icons">
            <FontAwesomeIcon className="footer-icon" icon={faTwitter}></FontAwesomeIcon>
            <FontAwesomeIcon className="footer-icon" icon={faFacebook}></FontAwesomeIcon>
            <FontAwesomeIcon className="footer-icon" icon={faWhatsapp}></FontAwesomeIcon>
        </div>
        <div className="footer-relinks">
            <p>PRIVACY POLICY</p>
            <p>ABOUT US</p>
        </div>
    </div>
  )
}
