import React from 'react'
import './AnouncementInfo.css'
import { StarRating } from "../../UI/StarRating/StarRating"

export const AnouncementInfo = () => {
    return (
        <div className="anouncement-container">
            <div className='anouncement-images'>
                <h1>Proyecto Atlantis</h1>
                <p>Apartamento en Zona norte, Armenia Quindio</p>
                <div className="image-container">
                    <img className="first-image" src='https://cdn.pixabay.com/photo/2017/10/07/10/28/new-england-style-house-2826065_960_720.jpg' alt='firstImg'></img>
                </div>
                <div className="other-images">
                    <div className="other-image-container">
                        <img className='other-image' src='https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685517_960_720.jpg' alt='secongImg'></img>
                    </div>
                    <div className="other-image-container">
                        <img className='other-image' src='https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg' alt='thirdImg'></img>
                    </div>
                    <div className="other-image-container">
                        <img className='other-image' src='https://cdn.pixabay.com/photo/2020/10/26/06/35/bedroom-5686427_960_720.jpg' alt='fourthImg'></img>
                    </div>
                </div>
                <div className="anouncement-info-add">
                    <p>2 Habitaciones</p>
                    <p>2 Baños</p>
                    <p>sin garaje</p>
                </div>
                
            </div>
            <div className="anouncement-info">
                <div className="info-text">
                    <p className='info-size'>Desde<br></br>250.000.000 COP</p>
                    <p className='info-title'>Informacion Principal</p>
                    <h3 className='info-subtitle'>Barrio o zona</h3>
                    <p className='info-paragraph'>providencia - Zona norte</p>
                    <h3 className='info-subtitle'>Direccion</h3>
                    <p className='info-paragraph'>Cra 19 - calle 24 - bloque 03</p>
                    <h3 className='info-subtitle'>Tipo de inmueble</h3>
                    <p className='info-paragraph'>Apartamento</p>
                    <h3 className='info-subtitle'>Propietario</h3>
                    <p className='info-paragraph'>Juliancito Amaya</p>
                
                    <div className="rating-container">
                        <StarRating />
                    </div>    
                </div>
                <div className="action-buttons">
                        <button  className='action-button-profile'>chat</button>
                        <button className='action-button-profile'>Correo</button>
                    </div>
                
            </div>
        </div>
    )
}
