import React from 'react'
import './RegisterCover.css'

export const RegisterCover = () => {
    const Register = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg"
  return (
    <div className="img-register-container">
        <img className='img-register' src={ Register } alt="register"></img>
    </div>
  )
}


