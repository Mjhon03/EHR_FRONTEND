import React from 'react'
import './LoginCover.css'

export const LoginCover = () => {
    const URL = "https://i.ibb.co/BqDQzp6/background.jpg"
  return (
    <div className="img-login-container">
        <img className='img-login' src={ URL } alt="image"></img>
    </div>
  )
}
