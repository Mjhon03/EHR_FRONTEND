import './ContactUs.css'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket, faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../Alert'
import { Overlay } from '../../StyledComponents/Overlay/StyledComponents';

export const ContactUs = () => {

  const SendEmailContact = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_lkmzngd', 'template_8es2kip', e.target, 'djlvhn3a_9RYyEcPe')
      .then(response => {
        Alert('El correo fue enviado correctamente', '', 'success', 'Ok', '3000')
      })
      .catch(error => {
        Alert('No se pudo enviar el correo', '', 'error', 'Ok', '3000')
      })
  }

  const [visible, setVisible] = useState(false)

  const changeVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <button onClick={changeVisible} className='header-action-button action-responsive'><FontAwesomeIcon className='header-action-icon'  icon={faHeadset} /></button>
      <div className='viewTextIcon'><b><p>Contacto</p></b></div>
      {
        visible &&
        <Overlay>
          <div className='render-container-contact-us'>
            <div>
              <div className='div-container-contact-us'>

                <div className='div-contact-us'>
                  <h2 className='title-contact-us'>Contáctenos</h2>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faEnvelope} className='tools-render-action' />
                    <p className='text-contact'> easyhouserent02@gmail.com</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faInstagram} className='tools-render-action' />
                    <p className='text-contact'> @easyhouserent</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faPhone} className='tools-render-action' />
                    <p className='text-contact'> +57 317 458 3592</p>
                  </div>
                  <div className="text-container-contact">
                    <FontAwesomeIcon icon={faTwitter} className='tools-render-action' />
                    <p className='text-contact'> @EasyHouseRent02</p>
                  </div>
                </div>
                <div className='div-contact-touch'>
                  <form className='form-contact-us' onSubmit={SendEmailContact}>
                    <div className="header-contact">
                      <FontAwesomeIcon className='exit-contact' onClick={changeVisible} icon={faArrowRightFromBracket}></FontAwesomeIcon>
                    </div>
                    <h2 className='create-title'>Ponte en contacto</h2>
                    <h4 className='create-title'>¡No dude en enviarnos un mensaje!</h4>
                    <input className='info-input-register' name='userName' type="text" placeholder='Nombre completo' /><br />
                    <input className='info-input-register' name='userEmail' type="email" placeholder='Email' /><br />
                    <textarea className='info-input-register contact-text' name="message" cols="30" rows="10" placeholder='Mensaje'></textarea><br />
                    <button className='register-submit'>Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      }
    </>
  )
}