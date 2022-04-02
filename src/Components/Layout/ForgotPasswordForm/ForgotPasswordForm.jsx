import axios from 'axios'
import React , { useState } from 'react'
import { ButtonEmail } from '../../UI/ButtonEmail/ButtonEmail'
import './ForgotPassword.css'

export const ForgotPasswordForm = () => {

    const[email, setemail] = useState({email: "email"})

    const captureValue =((event)=>{
        setemail(event.target.value)
        validateUser()
    })

    const validateUser = () =>{
        axios.get(urlUsers, {params:{email:email }})
        .then(response =>{
            if(response === true ){
                
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
            <input className='email-put' type="email" placeholder='Correo electrónico' required onChange={ captureValue }></input>
            <p className='create-account'>no tiene cuenta...<p>Crear una</p></p>
            <ButtonEmail />
            </div>
      </div>
    
  )
}
