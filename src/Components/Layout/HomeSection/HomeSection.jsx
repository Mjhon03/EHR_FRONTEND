import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './HomeSection.css'

export const HomeSection = () => {
  return (
    <div className='home-section-container'>
        <div className="home-section-info">
            <div className="section-container">
                <p className='section-container-slogan'>Aliado en busqueda de hogar</p>
                <h3 className='section-container-title'>Easy House Rent</h3>
            </div>
            <div className="search-home-container">
                <input className="search-box-home" type="text" placeholder='Busca por zona , lugar o nombre'></input>
                <button className='search-home-submit'>Buscar</button>
            </div>
            <div className="content-page-info">
                <div className="apartment-info">
                    <h3 className='icon-home-title'>diversidad de inmuebles</h3>
                    <div className="apartment-text">
                        <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/916/916771.png' alt='apartment-icon'></img>
                        <p>no solo viviendas, tambien contamos con locales, apartamentos... etc</p>
                    </div>
                </div>
                <div className="rent-info">
                   <h3 className='icon-home-title'>facilidad de contacto</h3>
                    <div className="rent-text">
                        <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/1786/1786971.png' alt='apartment-icon'></img>       
                        <p>contamos con medios que falicitan el contacto entre usuario y propietario</p>
                    </div>
                </div>
                <div className="cabin-info">
                    <h3 className='icon-home-title'>diversidad de sectores</h3>
                    <div className="cabin-text">
                        <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/2971/2971926.png' alt='apartment-icon'></img>       
                        <p>publicaciones ofertadas no solo en sector urbano, tambien en sector rural</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
