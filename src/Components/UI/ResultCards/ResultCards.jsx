import React from 'react'
import './ResultCards.css'
import { NavLink } from 'react-router-dom'

export const ResultCards = ({ data }) => {
    const { idanuncio, titulo, descripcion, calificaion, zona, direccion, fecha, valor, url1 } = data
    return (
        <div key={idanuncio} className="card-render-container">
            <div className="image-url-container">
                <img src={url1} alt='url' className='image-url-render' />

            </div>
            <div className="card-info-render">
                <div className="principal-render-card">
                    <h3>{ titulo }</h3>
                </div>
                <div className="card-render-add-data">
                    <p>{ descripcion }</p>
                    <p>${valor}</p>
                    <p>ubicacion : {zona} - {direccion}</p>
                    <p>fecha de publicacion : {fecha}</p>
                </div>
                <div className="button-anouncement-redirect">
                    <NavLink to=''><button className='open-anouncement'>Ver publicacion</button></NavLink>
                </div>
            </div>

        </div>
    )
}
