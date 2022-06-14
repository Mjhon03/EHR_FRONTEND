import './ContactUs.css'
import React from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../Alert'

export const ContactUs = () => {
    const SendEmailContact = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_lkmzngd','template_8es2kip',e.target,'djlvhn3a_9RYyEcPe')
    .then(response => {
      Alert('El correo fue enviado correctamente','','success','Ok','3000')
    })
    .catch(error => {
      Alert('No se pudo enviar el correo','','error','Ok','3000')
    })
  }

  return (
    <div className='render-container-contact-us'>
      <div>
        <div className='div-container-contact-us'>

          <div className='div-contact-us'>
              <h2 className='title-contact-us'>Contáctenos</h2>
              <p className='icons-contact'><FontAwesomeIcon icon={faEnvelope} className='icon-contact-us'/> easyhouserent02@gmail.com</p>
              <p className='icons-contact'><FontAwesomeIcon icon={faInstagram} className='icon-contact-us'/> @easyhouserent</p>
              <p className='icons-contact'><FontAwesomeIcon icon={faPhone} className='icon-contact-us'/> +57 317 458 3592</p>
              <p className='icons-contact'><FontAwesomeIcon icon={faTwitter} className='icon-contact-us'/> @EasyHouseRent02</p>   
          </div>

          <div className='div-contact-touch'>
            <form className='form-contact-us' onSubmit={SendEmailContact}>

              <h2 className='title-contact-touch'>Ponte en contacto</h2>
              <h4 className='subtitle-contact-touch'>¡No dude en enviarnos un mensaje!</h4>
              <input className='info-form-contact' name='userName' type="text" placeholder='Nombre completo'/><br/>
              <input className='info-form-contact' name='userEmail' type="email" placeholder='Email'/><br/>
              <textarea className='info-form-contact' name="message" cols="30" rows="10" placeholder='Mensaje'></textarea><br/>
              <button className='btn-send-contact'>Enviar</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}