import React from 'react'
import './ResultCards.css'
import { useNavigate } from 'react-router-dom'

export const ResultCards = ({ data }) => {
    const { idanuncio, titulo, ciudad ,descripcion, zona, cuidad ,direccion, fecha, precio, url1 } = data

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
                    <p className='infoCardSearch descriptionCardSearch'>{descripcion}</p>
                    <p><b>$</b>{precio}<b>co</b></p>
                    <p><b className='textInfoCardSearch'>Ciudad:</b> {ciudad}</p>
                    <p><b>Zona:</b> {zona}</p>
                    <p className='infoCardSearch'><b>Ubicación:</b> {direccion}</p>
                    <p className='infoCardSearch'><b>Fecha de publicación:</b> {fecha}</p>
                </div>
                <div className="button-anouncement-redirect">
                    <button onClick={sendToSelect} className='open-anouncement'>Ver publicación</button>
                </div>
            </div>
        </div>
    )
}