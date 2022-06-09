import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './ResultCards.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,  faMountainCity } from '@fortawesome/free-solid-svg-icons'

export const ResultCards = ({ data }) => {
    const { idanuncio, titulo, ciudad, descripcion, zona, cuidad, direccion, fecha, precio, url1 } = data

    console.log(cuidad);
    const navigate = useNavigate()

    const currency = require('react-currency-format')

    const sendToSelect = () => {
        navigate(`/anouncement/?idanounce=${idanuncio}&adzone=${zona}`)
    }
    return (
        <div onClick={sendToSelect} key={idanuncio} className="card-render-container">
            <div className="image-url-container">
                <img src={url1} alt='url' className='image-url-render' />
            </div>
            <div className="card-info-render">
                <div className="principal-render-card">
                    <h3 className='card-title-render'>{titulo}</h3>
                </div>
                <div className="card-render-add-data">
                    <div className="data-icon-render">
                        <p>{descripcion}</p>
                    </div>
                    <div className="data-icon-render">
                        <p><CurrencyFormat value={precio}displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p>{value}<b>co</b></p>} /></p>
                    </div>
                    <div className="data-icon-render">
                        <div className="fa-icon-render">
                            <FontAwesomeIcon className='fa-icon-desing' icon={faMountainCity} />
                        </div>
                        <p>{ciudad} - {zona} - {direccion}</p>
                    </div>                  
                    <div className="data-icon-render">
                        <div className="fa-icon-render">
                            <FontAwesomeIcon className='fa-icon-desing' icon={faCalendarDays} />
                        </div>
                        <p>{fecha}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}