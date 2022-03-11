import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeCover.css'

export const HomeCover = () => {
  return (
    <div className='text-container'>
        <h1 className="title">Easy House Rent</h1>
        <p className='text'>Creada en 2022 Easy House Rent es una plataforma encargada de 
            ofrecerte diferentes opciones de inmueble a solo un click, ¿qué esperas? 
            únete a nosotros.</p>
        <NavLink to="/aboutUs"><button className='button-more'>leer mas...</button></NavLink>
    </div>
  )
}
