import axios from 'axios'
import React , { useState } from 'react'
import './ForgotPassword.css'
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';

export const ForgotPasswordForm = () => {

    const EMAILURL = 'https://localhost:44352/api/confirmationEmail'

    const[email, setemail] = useState({email: "email"})

    const captureValue =((event)=>{
        setemail(event.target.value)
    })

    const sendEmail = (event) =>{
        event.preventDefault()
        axios.get(EMAILURL,{params:{email:email }})
        .then(response =>{
            if(response.data.length === 0){
                console.log("usuario no existente")
            }else{
                console.log(response.data)
                emailjs.sendForm('service_8uodl5r','template_9ea0axg',event.target,'KYHPZomx00qkEwjDP')
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
            }
        })

    }

  return (
      <div className="body-container">
        <div className="forgot-password-container">
            <div className="logo-container">
                <h3>EHR</h3>
                <p>Easy House Rent</p>
            </div>
            <h2 className='forgot-title'>Recuperacion de Contraseña</h2>
            <form onSubmit={sendEmail}>
                <input className='email-put' type="email" placeholder='Correo electrónico' name="user_name" onChange={ captureValue }></input>
                <p className='create-account'>no tiene cuenta...<NavLink to="/register"><p className='send-register'>Cree una</p></NavLink></p>
                <div className="send-content">
                    <button className='send-email'>Enviar</button>
                </div>  
            </form>
        </div>
      </div>
    
  )
}
