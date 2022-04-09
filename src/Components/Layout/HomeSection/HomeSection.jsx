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
                    <img className="house-icon" src='https://cdn-icons.flaticon.com/png/512/767/premium/767201.png?token=exp=1649531893~hmac=2d3202478e5be3cc8e472d06f5d4d84d' alt='apartment-icon'></img>
                    <div className="apartment-text">
                        <h3 className='icon-home-title'>diversidad de inmuebles</h3>
                        <p>no solo viviendas, tambien contamos con locales, apartamentos... etc</p>
                    </div>
                </div>
                <div className="rent-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/1786/1786971.png' alt='apartment-icon'></img>       
                    <div className="rent-text">
                        <h3 className='icon-home-title'>facilidad de contacto</h3>
                        <p>contamos con medios que falicitan el contacto entre usuario y propietario</p>
                    </div>
                </div>
                <div className="cabin-info">
                    <img className="house-icon" src='https://cdn-icons-png.flaticon.com/512/2971/2971926.png' alt='apartment-icon'></img>       
                    <div className="cabin-text">
                        <h3 className='icon-home-title'>ambieguedad de sectores</h3>
                        <p>publicaciones ofertadas no solo en sector urbano, tambien en sector rural</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
