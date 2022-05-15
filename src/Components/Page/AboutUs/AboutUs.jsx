import React from 'react'
import './AboutUs.css'
import { Header } from '../../Layout/Header/Header'

export const AboutUs = () => {
  return (
    <>
    < Header />
    <div className='title-content'>
      <h1 className='textTitle-nosotros'>Nosotros</h1>
    </div> 
    <div className='allcontainers'>
      <div className='grid-div'></div>
      <div className='grid-div' id='grid-item-photo'></div>
      <div className='grid-div' id='grid-item-photo'></div>
      <div className='grid-div' ></div>
      <div className='grid-div'></div>
      <div className='grid-div' id='grid-item-photo'></div>
    </div >
    <div className='menu-documentation'>
      <a href="" className='link-documentation'>¿Cómo usarlo?</a>
    </div>
    </>
  )
}
