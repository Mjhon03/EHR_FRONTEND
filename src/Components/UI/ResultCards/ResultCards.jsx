import React from 'react'
import './ResultCards.css'
import { useNavigate } from 'react-router-dom'

export const ResultCards = ({ data }) => {
    const { idanuncio, titulo, ciudad ,descripcion, zona, cuidad ,direccion, fecha, valor, url1 } = data

    console.log(cuidad);
    const navigate = useNavigate()

    const sendToSelect = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }
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
                    <p>{ ciudad }</p>
                    <p>ubicacion : {zona} - {direccion}</p>
                    <p>fecha de publicacion : {fecha}</p>
                </div>
                <div className="button-anouncement-redirect">
                    <button onClick={ sendToSelect} className='open-anouncement'>Ver publicacion</button>
                </div>
            </div>
        </div>
    )
}