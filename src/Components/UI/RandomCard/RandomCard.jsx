import React from 'react'
import './RandomCard.css'

export const RandomCard = ({ data }) => {

  const { idanuncio, titulo, descripcion, direccion, zona, ciudad, precio, url1 } = data
  return (
    <div className="card-random-container">

      <div className="other-random-info-container">
        <div className="other-random-info">
          <div className="card-random-title">
            <h1>{titulo}</h1>
          </div>
          <div className="card-random-aditional">
            <p>{descripcion}</p>
            <p>{direccion}</p>
            <p>{precio}</p>
          </div>
          <div className="button-redirect-random">
            <button>ver publicacion</button>
          </div>
        </div>
        <div className="other-random-image-container">
          <div className="image-container">
            <img src={url1} alt="imagebanner" className='image-banner' />
          </div>

        </div>
      </div>
    </div>
  )
}
