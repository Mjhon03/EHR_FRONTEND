import './Contact.css'
import React from 'react'
import emailjs from '@emailjs/browser'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Alert } from '../../Alert'

export const Contact = () => {
  const SendEmailContact = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_lkmzngd','template_8es2kip',e.target,'djlvhn3a_9RYyEcPe')
    .then(response => {
      console.log(response)
      Alert(
        'El correo fue enviado correctamente',
        '',
        'success',
        'Ok',
        '3000'
      )
    })
    .catch(error => {
      console.log(error)
      Alert(
        'No se pudo enviar el correo',
        '',
        'error',
        'Ok',
        '3000'
      )
    })
  }

  return (
    <div>
      <Header/>
      <div className='div-contact-container'>

        <div className='div-contactUs'>
          <h2 className='title-contactUs'>Contactenos</h2>
          <p><FontAwesomeIcon icon={faEnvelope}/> easyhouserent02@gmail.com</p>
          <p><FontAwesomeIcon icon={faInstagram}/> easyhouserent</p>
          <p><FontAwesomeIcon icon={faPhone}/> +57 317 458 3592 - +57 318 843 3720</p>
          <p><FontAwesomeIcon icon={faTwitter}/> @EasyHouseRent02</p>      
        </div>

        <div className='div-contact-touch'>
          <form className='form-contactUs' onSubmit={SendEmailContact}>
            <h2 className='title-contact-touch'>Ponte en contacto</h2>
            <h4 className='title-contact-touch'>¡No dude en enviarnos un mensaje!</h4>

            <input className='input-contact' name='userName' type="text" placeholder='Nombre'/>
            <input className='input-contact' name='userLastName' type="text" placeholder='Apellido'/>
            <input className='input-contact' name='userEmail' type="email" placeholder='Email'/>
            <textarea className='textarea-contact' name="message" cols="30" rows="10" placeholder='Mensaje'></textarea>

            <button className='btn-contactUs'>Enviar</button>
          </form>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
