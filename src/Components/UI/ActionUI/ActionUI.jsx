import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActionUI.css'

export const ActionUI = () => {
  return (
    <div className='action-container'>
        <NavLink to="/login"><h2>Ingresar</h2></NavLink>
        <NavLink to="/register"><h2>Crear cuenta</h2></NavLink>
    </div>
  )
}
