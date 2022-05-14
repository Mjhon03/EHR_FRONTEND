import React from 'react'
import './ResultCards.css'

export const ResultCards = ({ data }) => {
    const { idanuncio , titulo , descripcion , calificaion , zona , direccion , fecha , valor , url1  } = data
    return (
        <div  key={ idanuncio} className="card-render-container">
            <div className="image-url-container">
                <img src={url1} alt='url' className='image-url-render'/>

            </div>
            <div className="card-info-render">
                <h1>{ titulo }</h1>
                <p>{ descripcion }</p>
                <div className="card-render-add-data">
                    <p>${ valor }</p>
                    <p>ubicacion : { zona } - { direccion }</p>
                    <p>fecha de publicacion : { fecha }</p>
                </div>
            </div>
            
        </div>
    )
}
